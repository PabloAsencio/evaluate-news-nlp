var path = require('path');
const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.post('/analyze', async (req, res) => {
    const data = req.body;
    const text = data.userInput;
    const lang = data.lang;
    const url = `${baseURL}?key=${apiKey}&lang=${lang}&txt=${querystring.escape(
        text
    )}`;
    axios
        .post(url)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});
