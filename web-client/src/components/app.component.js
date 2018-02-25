import React from "react";

export const AppComponent = props => {
  return (
    <div className="App">
      <header className="header">
        <h1>Raspberry Whiteboard Translator</h1>
      </header>

      <div className=" container">
        <div className="row content">
          <div className="six columns">
            <h3>Board View</h3>
            <img src={props.image} />
          </div>
          <div className="six columns">
            <h3>Board Contents</h3>
            {wordsToList(props.words)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppComponent;

const wordsToList = words => {
  if (!words) return null;
  const items = words.map((ele, i) => {
    if (ele != "") return <li key={i}>{ele}</li>;
  });
  return <ul className="left-just">{items}</ul>;
};
