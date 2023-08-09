const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        username: {
            type: String,
            required: true,

        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: '',
        }
    }
);

module.exports = mongoose.model('User', UserSchema);