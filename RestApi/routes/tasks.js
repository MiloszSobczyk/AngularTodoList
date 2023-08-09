const express = require('express');
const router = express.Router();
const Task = require('../models/Task')

// get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// get specific user tasks
router.get('/:userId', async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.params.userId });
        res.json(tasks);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// post task
router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        completion: req.body.completion,
        status: req.body.status,
        userId: req.body.userId,
    });

    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } 
    catch(err) {
        res.json({ message: err });
    }
});

// delete task
router.delete('/:taskId', async (req, res) => {
    try {
        const removedTask = await Task.deleteOne({ _id: req.params.taskId });
        res.json(removedTask);    
    }
    catch(err) {
        res.json({ message: err });
    }
});

// update task
router.patch('/:taskId', async (req, res) => {
    try {
        const updatedTask = await Task.updateOne(
            { _id: req.params.taskId },
            { $set: {
                title: req.body.title,
                description: req.body.description,
                completion: req.body.complete,
                status: req.body.status
            }
        });
        res.json(updatedTask);
    }
    catch(err) {
        res.json({ message: err });
    }
})


module.exports = router;