const pool = require('../../config/db');
const express = require('express');


const router = express.Router();

router.get('/general/clientes', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM clientes');
    res.json(rows);
});

router.get('/general', async (req, res) => {
    res.send('ae');
});

module.exports = router;
