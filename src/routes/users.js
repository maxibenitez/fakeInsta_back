const express = require('express');
const { getUsers, getUser, addUser } = require('../controllers/users');

const router = express.Router();

// Obtener todos los usuarios
router.get('/', getUsers);

// Obtener usuario por id
router.get('/:id', getUser);

// Guardar usuario
router.post('/', addUser);

module.exports = router;