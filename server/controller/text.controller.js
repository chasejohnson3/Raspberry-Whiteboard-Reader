const fs = require('fs');
exports.post = function(req, res) {
  let text = req.body.text;
  fs.writeFileSync("server/saves/currentText.txt",text,function(err){
    if(err){
        return res.send(err);
    }      
  })
  res.send("Text appended!")
};
exports.get = function(req, res) {
  let text = fs.readFileSync('server/saves/currentText.txt','utf8',function(err){
      if(err){
          return res.send(err);
      }
  });
  //console.log(text);
  res.send(text);
};
