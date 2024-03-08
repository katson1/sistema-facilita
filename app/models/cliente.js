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

    static async create(nome, email, telefone) {
        const { rows } = await pool.query(
            'INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, telefone]
        );
        return rows[0];
    }

    static async update(id, nome, email, telefone) {
        const { rows } = await pool.query(
            'UPDATE clientes SET nome = $2, email = $3, telefone = $4 WHERE id = $1 RETURNING *',
            [id, nome, email, telefone]
        );
        return rows[0];
    }

    static async delete(id) {
        await pool.query('DELETE FROM clientes WHERE id = $1', [id]);
    }
}

module.exports = Cliente;
