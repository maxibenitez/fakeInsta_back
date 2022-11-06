const express = require('express');
const { getPosts, getPost, addPost } = require('../controllers/posts');

const router = express.Router();

// Obtener todos los posts
router.get('/', getPosts);

// Obtener post por id
router.get('/:id', getPost);

// Guardar posts
router.post('/', addPost);

module.exports = router;