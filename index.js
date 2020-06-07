const express = require('express');
const app = express();
const importData = require('./data.json');
let port = process.env.PORT || 4000;

// routes
app.get('/', (req, res) => { res.status(200).send('Hello Heroku.'); });
app.get('/players', (req, res) => { res.status(200).send(importData) });

// server listens to port
app.listen(port, () => {
    console.log(`Testing app is listening on Port: @${port}`);
});