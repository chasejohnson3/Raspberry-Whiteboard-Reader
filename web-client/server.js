var Tesseract = require("tesseract.js");
let request = require("request");
var fs = require("fs");
var url = "https://raspberry-whiteboard-reader.azurewebsites.net/api/upload";
var filename = "pic.jpg";


request(url, { encoding: "binary" }, function(error, response, body) {
  fs.writeFile(filename, body, "binary", function(err) {});
});

// Tesseract.recognize(filename)
//   .progress(function(p) {
//     console.log("progress", p);
//   })
//   .catch(err => console.error(err))
//   .then(function(result) {
//     console.log(result.text);
//     process.exit(0);
//   });
