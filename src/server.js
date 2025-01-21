import express from 'express';
import Sequelize from 'sequelize';
import User from './models/user.js';
import config from './config/database.js';
import userRoutes from './routes.js';

// Inicializa o Express
const app = express();

// Middleware que permite que o servidor entenda requisições com corpo em JSON
app.use(express.json());

// Configuração do Sequelize para conectar ao banco de dados
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        define: {
            timestamps: false,
        },
    }
);

// Inicializa o modelo User com a instância do Sequelize
User.init(sequelize);

// Define as rotas específicas para os usuários
app.use('/usuarios', userRoutes);

// Testa a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Banco de dados conectado com sucesso.');
        app.listen(3000, () => {
            console.log('Servidor em funcionamento na porta 3000.');
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

