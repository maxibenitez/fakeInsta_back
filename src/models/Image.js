const { Schema, model } = require('mongoose');

const ImageSchema = Schema({
    _id: Number,
    src: String,
    description: String,
});

module.exports = model('Image', ImageSchema);