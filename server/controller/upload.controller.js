exports.post = function(req, res) {
  if (!req.files) return res.status(400).send("No files were uploaded.");
  let image = req.files.image;
  image.mv(`saves/currentImage.jpg`, function(err) {
    if (err) return res.status(500).send(err);
    res.send("Image uploaded!");
  });
};
exports.get = function(req, res) {
  let image = require('fs').readFileSync('saves/currentImage.jpg');
  res.writeHead(200, {'Content-Type': 'image/jpeg' });
  res.end(image, 'binary');
};
