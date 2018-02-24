let text = require('../controller/text.controller');
module.exports = function(app){
    app.post('/text', text.post);
    app.get('/text', text.get);
};