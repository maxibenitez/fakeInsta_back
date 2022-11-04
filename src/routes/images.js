const express = require('express');

const router = express.Router();

// Obtener todas las imagenes
router.route('/images').get((_req, res) => {
    
});

// Obtener imagenes por id
router.route('/images/:id').get((_req, res) => {
    
});

// Guardar imagenes
router.route('/images').post((_req, res) => {
    
});

// Borrar imagenes por id
router.route('/images/:id').delete((_req, res) => {
    
});

module.exports = {
    router
};