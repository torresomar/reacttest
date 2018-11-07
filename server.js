const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const uploading = multer({storage: storage});

app.get('/', (req, res) => res.sendFile(__dirname + '/' + 'index.html'));

app.post('/upload', uploading.single('image'), function (req, res) {

    imagePath = '/uploads/' + req.file.originalname;
    const response = {
        message: 'Image has been uploaded',
        path: imagePath
    };
    console.log(response);
    res.json(JSON.stringify(response));
});


const server = app.listen(8081, () => console.log("Server is running!"));

