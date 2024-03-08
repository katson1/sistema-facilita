const Cliente = require('../models/cliente');

const findAllClientes = async () => {
    return await Cliente.findAll();
};

const findClienteById = async (id) => {
    return await Cliente.findById(id);
};

const findClienteByEmail = async (email) => {
    return await Cliente.findByEmail(email);
};

const createCliente = async (nome, email, telefone, coordenada_x, coordenada_y) => {
    return await Cliente.create(nome, email, telefone, coordenada_x, coordenada_y);
};

const updateCliente = async (id, nome, email, telefone, coordenada_x, coordenada_y) => {
    return await Cliente.update(id, nome, email, telefone, coordenada_x, coordenada_y);
};

const deleteCliente = async (id) => {
    await Cliente.delete(id);
};

module.exports = {
    findAllClientes,
    findClienteById,
    findClienteByEmail,
    createCliente,
    updateCliente,
    deleteCliente
};
