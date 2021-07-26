const router = require('express').Router();
const Message = require('../../models');

router.get('/', (req, res) => { // get all messages 
    Message.find({})
        .sort({ _id: -1 })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

router.post('/', (req, res) => { // create new message
    Message.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err)
        })
});

module.exports = router;