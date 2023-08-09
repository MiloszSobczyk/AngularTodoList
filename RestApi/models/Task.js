const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,

        },
        description: {
            type: String,
            default: '',
        },
        completion: {
            type: String,
            enum: ['complete', 'incomplete'],
            default: 'incomplete',
        },
        status: {
            type: String,
            enum: ['active', 'archived'],
            default: 'active',
        },
    }
);

module.exports = mongoose.model('Task', TaskSchema);
