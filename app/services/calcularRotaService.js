const Cliente = require('../models/cliente');

const calcularRota = async () => {
    const clientes = await Cliente.findAll();
    
    let rota = [[0, 0]];
    let rotaIds = [];
    
    let visitados = new Array(clientes.length).fill(false);

    let atual = rota[0];
    
    while (rota.length <= clientes.length) {
        let proximo = null;
        let distanciaMinima = Infinity;

        clientes.forEach((cliente, index) => {
            if (!visitados[index]) {
                const distancia = Math.sqrt(
                    Math.pow(cliente.coordenada_x - atual[0], 2) +
                    Math.pow(cliente.coordenada_y - atual[1], 2)
                );

                if (distancia < distanciaMinima) {
                    distanciaMinima = distancia;
                    proximo = cliente;
                    atual = [cliente.coordenada_x, cliente.coordenada_y];
                }
            }
        });

        if (proximo) {
            rota.push(atual);
            rotaIds.push(proximo);
            visitados[clientes.indexOf(proximo)] = true;
        } else {
            break;
        }
    }

    rota.push([0, 0]);

    return rotaIds;
};

module.exports = { calcularRota };
