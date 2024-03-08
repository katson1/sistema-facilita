const clienteService = require('../services/clienteService');

const getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteService.findAllClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar clientes', error: error.message });
    }
};

const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await clienteService.findClienteById(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o cliente', error: error.message });
    }
};

const createCliente = async (req, res) => {
    const { nome, email, telefone, coordenada_x, coordenada_y } = req.body;
    try {
        if (!nome || !email || !telefone || !coordenada_x || !coordenada_y) {
            return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
        }

        if(isNaN(coordenada_x) || isNaN(coordenada_y)) {
            return res.status(400).json({ message: 'As coordenadas devem ser um número' });
        }

        if(await clienteService.findClienteByEmail(email)){
            return res.status(409).json({ message: 'Email já cadastrado' });
        }

        const novoCliente = await clienteService.createCliente(nome, email, telefone, coordenada_x, coordenada_y);
        res.json(novoCliente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, telefone, coordenada_x, coordenada_y } = req.body;
        if (!nome || !email || !telefone || !coordenada_x || !coordenada_y) {
            return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
        }
        
        if(isNaN(coordenada_x) || isNaN(coordenada_y)) {
            return res.status(400).json({ message: 'As coordenadas devem ser um número' });
        }

        const cliente = await clienteService.updateCliente(id, nome, email, telefone, coordenada_x, coordenada_y);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o cliente', error: error.message });
    }
};

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        await clienteService.deleteCliente(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o cliente', error: error.message });
    }
};

const getClienteByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const cliente = await clienteService.findClienteByEmail(email);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o cliente', error: error.message });
    }
}

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};