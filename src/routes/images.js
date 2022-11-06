const express = require('express');
const { getImages, getImage, addImage } = require('../controllers/images');

const router = express.Router();

// Obtener todas las imagenes
router.get('/', getImages);

// Obtener imagenes por id
router.get('/:id', getImage);

// Guardar imagenes
router.post('/', addImage);

module.exports = router;