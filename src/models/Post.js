const { Schema, model } = require('mongoose');

const PostSchema = Schema({
    _id: Number,
    userId: String,
    imageId: Number
});

module.exports = model('Post', PostSchema);