const express = require('express');
const router = express.Router();
const User = require('../models/User')

// get authorization
router.get('/authorize/:userId', async (req, res) => {
    const user = await User.findOne({ id: req.body.userId }, 'password');
    if(user.password === req.body.password)
        res.sendStatus(200);
    else
        res.sendStatus(401);
});

// add user
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } 
    catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;