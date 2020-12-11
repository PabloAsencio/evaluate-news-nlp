var path = require('path');
const express = require('express');
const axios = require('axios');
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
    const type = validateURL(text) ? 'url' : 'txt';
    const url = `${baseURL}?key=${apiKey}&lang=${lang}&${type}=${encodeURIComponent(
        text
    )}`;
    axios
        .post(url)
        .then((response) => {
            const analysis = response.data;
            const analysisSummary = {
                confidence: analysis.confidence,
                irony: analysis.irony,
                scoreTag: analysis.score_tag,
                subjectivity: analysis.subjectivity,
            };
            res.send(analysisSummary);
        })
        .catch((error) => {
            console.log(error);
        });
});

function validateURL(text) {
    const validURLRegEx = /^(http|https):\/\//i;
    return validURLRegEx.test(text);
}
