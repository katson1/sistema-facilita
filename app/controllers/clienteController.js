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
    try {
        const { nome, email, telefone } = req.body;
        const cliente = await clienteService.createCliente(nome, email, telefone);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o cliente', error: error.message });
    }
};

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, telefone } = req.body;
        const cliente = await clienteService.updateCliente(id, nome, email, telefone);
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

module.exports = {
    getAllClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};