const express    = require('express');       
const app        = express();  
let router = express.Router();              
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

require('./routes/upload.route')(router);
app.use('/api',router);
app.get('/', function(req, res) {
    res.send("Please use /upload");   
});

const port = process.env.PORT || 4000;  
app.listen(port);
console.log('Running on ' + port);