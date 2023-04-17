const express = require('express');
const app = express();
const SHA256 = require('crypto-js/sha256');
const random = require('randomstring');

// question 1
app.get('/', (req, res) => {

    // using setTimeout to make it return only after 1s
    setTimeout(() => {

        // creating the random hash string from random string, and returning it as a response
        res.send(SHA256(random.generate()).toString());
    }, 1000);
});

// indicate that server is running + listening on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000');
});