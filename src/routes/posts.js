const express = require('express');

const router = express.Router();

// Obtener todos los posts
router.route('/posts').get((_req, res) => {
    
});

// Obtener post por id
router.route('/posts/:id').get((_req, res) => {
    
});

// Guardar posts
router.route('/posts').post((_req, res) => {
    
});

// Borrar post por id
router.route('/posts/:id').delete((_req, res) => {
    
});

module.exports = {
    router
};