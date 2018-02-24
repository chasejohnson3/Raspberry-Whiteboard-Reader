let upload = require('../controller/upload.controller');
module.exports = function(app){
    app.post('/', upload.create);
    //app.get('/', upload.findOne);
};