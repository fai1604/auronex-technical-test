const express = require('express');
const app = express();
const SHA256 = require('crypto-js/sha256');
const random = require('randomstring');
const axios = require('axios');

// question 1
app.get('/', (req, res) => {

    // using setTimeout to make it return only after 1s
    setTimeout(() => {

        // creating the random hash string from random string, and returning it as a response
        res.send(SHA256(random.generate()).toString());
    }, 1000);
});

// question 2
app.get('/rhm', async (req, res) => {
    try {

        // request hash string from endpoint #1
        const response = await axios.get("http://localhost:3000");
        const data = response.data;

        // getting last character of hash string
        const lastChar = data.charAt(data.length - 1);

        // checking if its not a number
        if (isNaN(lastChar)) {
            res.status(404).send(`The last character is '${lastChar}'. This is an alphabet. Does not pass.`);
        } 

        // checking if it is an even number 
        else if (lastChar % 2 === 0) {
            res.status(404).send(`The last character is '${lastChar}'. This is an even number. Does not pass.`);

        // checking if it is an odd number
        } else if (lastChar % 2 !== 0) {
            res.status(200).send(`The last character is '${lastChar}'. This is a number and an odd number. Pass!`);

        }
    } catch (error) {
        return error;
    }
})

// indicate that server is running + listening on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000');
});