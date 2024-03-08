const pool = require('../../config/db'); // Importando a conexão com o banco de dados.

class Cliente {
    static async findAll() {
        const { rows } = await pool.query('SELECT * FROM clientes');
        return rows;
    }

    static async findById(id) {
        const { rows } = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
        return rows[0];
    }

    static async findByEmail(email) {
        const { rows } = await pool.query('SELECT * FROM clientes WHERE email = $1', [email]);
        return rows[0];
    }
    
    static async create(nome, email, telefone, coordenada_x, coordenada_y) {
        const { rows } = await pool.query(
            'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nome, email, telefone, coordenada_x, coordenada_y]
        );
        return rows[0];
    }

    static async update(id, nome, email, telefone, coordenada_x, coordenada_y) {
        const { rows } = await pool.query(
            'UPDATE clientes SET nome = $2, email = $3, telefone = $4, coordenada_x = $5, coordenada_y = $6 WHERE id = $1 RETURNING *',
            [id, nome, email, telefone, coordenada_x, coordenada_y]
        );
        return rows[0];
    }


    static async delete(id) {
        await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
    }

    static async findAllWithCoord() {
        const { rows } = await pool.query('SELECT * FROM clientes where coordenada_x IS NOT NULL and coordenada_y IS NOT NULL');
        return rows;
    }
}

module.exports = Cliente;
