const express    = require('express');       
const app        = express();  
let router = express.Router();  
const path = require('path');            
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

// Route for images interaction
require('./routes/upload.route')(router);
// Route for txt interaction
require('./routes/text.route')(router);

app.use('/api',router);
app.get('/', function(req, res) {    
    res.sendFile(path.join(__dirname + '/index.html'));
});




const port = process.env.PORT || 4000;  
app.listen(port);
console.log('Running on ' + port);