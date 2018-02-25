import React, { Component } from "react";
import * as fb from "firebase";
import { AppComponent } from "../components/app.component";

const config = {
  apiKey: "AIzaSyC39_cOIetesWBam8euOaZhE06R73joTmU",
  authDomain: "raspberry-whiteboard-reader.firebaseapp.com",
  projectId: "raspberry-whiteboard-reader",
  databaseURL: "https://raspberry-whiteboard-reader.firebaseio.com",
  storageBucket: "raspberry-whiteboard-reader.appspot.com",
  messagingSenderId: "165799684456"
};
const firebase = fb.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      image: ""
    };
    this.getText();
    this.setState = this.setState.bind(this);
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ words: [], image: "" });
      this.getText();
      this.getImage();
    }, 5000);
  };
  getText = () => {
    firebase
      .database()
      .ref("/words")
      .once("value")
      .then(snapshot => {
        this.setState({ words: snapshot.val() });
      });
  };
  getImage = () => {
    firebase
      .storage()
      .ref()
      .child("current.jpg")
      .getDownloadURL()
      .then(url => {
        this.setState({ image: url });
      });
  };

  render() {
    return <AppComponent words={this.state.words} image={this.state.image} />;
  }
}

export default App;
