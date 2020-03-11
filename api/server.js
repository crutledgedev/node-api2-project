const express = require('express');

const dbRouter = require('../data/db-router.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    const query = req.query;
    console.log(req.query);
    res.status(200).json(query);
});

server.use('/api/posts', dbRouter);


module.exports = server;