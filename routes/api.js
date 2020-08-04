const express = require('express');
const router = express.Router();

// Get a list of Ninjas from the db
router.get('/ninjas', (req, res) => {

    res.send({type: 'GET'});
});


//Add a new list of Ninjas to the db
router.post('/ninjas', (req, res) => {

    res.send({type: 'POST'});
});


//update a Ninja in the db
router.put('/ninjas/:id', (req, res) => {

    res.send({type: 'PUT'});
});

//Delete a ninja from the db
router.delete('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;