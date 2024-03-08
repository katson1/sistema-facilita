const Cliente = require('../models/cliente');

const findAllClientes = async () => {
    return await Cliente.findAll();
};

const findClienteById = async (id) => {
    return await Cliente.findById(id);
};

const createCliente = async (nome, email, telefone) => {
    return await Cliente.create(nome, email, telefone);
};

const updateCliente = async (id, nome, email, telefone) => {
    return await Cliente.update(id, nome, email, telefone);
};

const deleteCliente = async (id) => {
    await Cliente.delete(id);
};

module.exports = {
    findAllClientes,
    findClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};
