const express = require('express');
const Db = require('./db.js');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send(`
//       <h2>Day 2 Node Project</h>
//       <p>Welcome to the Lambda Hubs API D2</p>
//     `);
//   });

router.get('/', (req, res) => {
    Db.find()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message: "Error retrieving DB"
        });
    });
});





  module.exports = router;