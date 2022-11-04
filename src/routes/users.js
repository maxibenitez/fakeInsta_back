const express = require('express');

const router = express.Router();

// Obtener todos los usuarios
router.route('/users').get((_req, res) => {
    
});

// Obtener usuario por id
router.route('/users/:id').get((_req, res) => {
    
});

module.exports = {
    router
};