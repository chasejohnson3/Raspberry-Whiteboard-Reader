const tesseract = require("tesseract.js");
const path = require("path");
const fs = require("fs");
const request = require("request-promise");
const url = "https://raspberry-whiteboard-reader.azurewebsites.net/api/upload";
const filename = "test.jpg";

// request(url, { encoding: null }).then(res => {
//   const buffer = Buffer.from(res, "utf8");
//   fs.writeFileSync(filename, buffer);

  var tesseractPromise = tesseract
    .create({ langPath: "eng.traineddata" })
    .recognize(filename, "eng")
    .then(function(result) {
      console.log(result.text);
      process.kill();
    });
// });
