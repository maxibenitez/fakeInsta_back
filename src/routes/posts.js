const express = require('express');
const { getPosts, getPost, savePost, deletePost } = require('../controllers/posts');

const router = express.Router();

// Obtener todos los posts
router.get('/', getPosts);

// Obtener post por id
router.get('/:id', getPost);

// Guardar posts
router.post('/', savePost);

// Borrar post por id
router.delete('/:id', deletePost);

module.exports = router;