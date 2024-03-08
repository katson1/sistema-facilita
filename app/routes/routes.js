const pool = require('../../config/db');
const express = require('express');
const calcularRotaController = require('../controllers/calcularRotaController');

const router = express.Router();

router.get('/api/calcular-rota', calcularRotaController.calcularRota);

module.exports = router;
