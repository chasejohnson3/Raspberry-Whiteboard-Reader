let upload = require('../controller/upload.controller');
module.exports = function(app){
    app.post('/upload', upload.post);
    app.get('/upload', upload.get);
};