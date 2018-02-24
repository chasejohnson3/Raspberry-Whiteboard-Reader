let upload = require('../controller/upload.controller');
module.exports = function(app){
    app.post('/upload', upload.create);
    app.get('/upload', upload.findOne);
};