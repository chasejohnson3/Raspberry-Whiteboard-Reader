exports.create = function(req, res) {
 
    if (!req.files) return res.status(400).send("No files were uploaded.");
  
    let sampleFile = req.files.sampleFile;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(`../saves/sampleFile.jpg`, function(err) {
      if (err) return res.status(500).send(err);
  
      res.send("File uploaded!");
    });
  };