const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',          // Nome de usuário do PostgreSQL
  host: 'localhost',         // Host, que deve ser 'localhost' se você está rodando o PostgreSQL no Docker
  database: 'todolist',      // Nome do banco de dados que você criou
  password: 'password',      // Senha que você configurou no Docker Compose
  port: 5432,                // Porta padrão do PostgreSQL
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to the PostgreSQL database');
  } catch (err) {
    console.error('Database connection error', err);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
