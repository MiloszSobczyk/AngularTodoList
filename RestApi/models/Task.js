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
        status: {
            type: String,
            enum: ['complete', 'incomplete', 'archived'],
            default: 'incomplete',
        }
    }
);

module.exports = mongoose.model('Task', TaskSchema);
