const Cliente = require('../models/cliente');

const calcularRota = async () => {
    const clientes = await Cliente.findAll();
    
    let rota = [[0, 0]];
    let rotaClientes = [];
    
    let visitados = new Array(clientes.length).fill(false);
    let totalVisitados = 0;
    
    let atual = rota[0];
    
    while (totalVisitados < clientes.length) {
        let proximoIndex = null;
        let distanciaMinima = Infinity;

        clientes.forEach((cliente, index) => {
            if (!visitados[index]) {
                const distancia = Math.sqrt(
                    Math.pow(cliente.coordenada_x - atual[0], 2) +
                    Math.pow(cliente.coordenada_y - atual[1], 2)
                );

                if (distancia < distanciaMinima) {
                    distanciaMinima = distancia;
                    proximoIndex = index;
                }
            }
        });

        if (proximoIndex !== null) {
            const proximoCliente = clientes[proximoIndex];
            atual = [proximoCliente.coordenada_x, proximoCliente.coordenada_y];
            rota.push(atual);
            rotaClientes.push(proximoCliente);
            visitados[proximoIndex] = true;
            totalVisitados++;
        } else {
            break;
        }
    }

    rota.push([0, 0]);

    return rotaClientes; 
};

module.exports = { calcularRota };
