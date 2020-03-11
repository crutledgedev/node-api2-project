const express = require('express');
const Db = require('./db.js');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send(`
//       <h2>Day 2 Node Project</h>
//       <p>Welcome to the Lambda Hubs API D2</p>
//     `);
//   });


//



//Create new Post
router.post('/', (req, res) => {
    Db.insert(req.body)
    .then(newPost => {
        res.status(201).json(newPost);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: "There was an error while saving the post to the database"    
        })
    })
})








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

router.get('/:id', (req, res) => {
    Db.findById(req.params.id)
    .then(post => {
        if(post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist"});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "The post information could not be retreived"})
    });
})



router.put('/:id', (req, res) => {
    const update = req.body;
    Db.update(req.params.id, update)
        .then(post => {
            if(post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: "The post information could not be modified."
            });
        });


});








module.exports = router;