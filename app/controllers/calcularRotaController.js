const rotaService = require('../services/calcularRotaService');

const calcularRota = async (req, res) => {
    try {
        const rota = await rotaService.calcularRota();
        res.json({ success: true, rota });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { calcularRota };
