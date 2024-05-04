const express = require('express');
app = express();

app.get('/', (req, res) => {
    res.send('Our first express application :)');
});

app.listen(3000, () => {
    console.log('Server is up :)');
});













/*
const { createServer } = require('node:http');

const server = createServer((req, res) => {
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server is up :)');
});
*/