exports.create = function(req, res) {
 
    if (!req.files) return res.status(400).send("No files were uploaded.");
  
    let file = req.files.file;
  
    // Use the mv() method to place the file somewhere on your server
    file.mv(`saves/file.jpg`, function(err) {
      if (err) return res.status(500).send(err);
  
      res.send("File uploaded!");
    });
  };
  // exports.findOne = function(req, res) {
  //   Session.findById(req.params.sessionId, function(err, session) {
  //     if (err) {
  //       res.status(500).send({ message: "Session retrieval error" });
  //     } else {
  //       res.send(session);
  //     }
  //   });
  // };
  