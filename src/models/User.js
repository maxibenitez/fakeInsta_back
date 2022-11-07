const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true
    },
    profilePic: Number
});

module.exports = model('User', UserSchema);