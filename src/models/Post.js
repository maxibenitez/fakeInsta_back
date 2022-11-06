const { Schema, model } = require('mongoose');

const PostSchema = Schema({
    userId: String,
    imageId: Number
});

module.exports = model('Post', PostSchema);