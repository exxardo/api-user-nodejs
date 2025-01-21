import express from 'express';
import Sequelize from 'sequelize';
import User from './models/user.js'; // Incluído o .js para ES Modules
import config from './config/database.js'; // Certifique-se de que este arquivo está configurado corretamente
import userRoutes from './routes.js'; // Rotas específicas

// Inicializa o Express
const app = express();
app.use(express.json());

// Configuração do Sequelize
const sequelize = new Sequelize(
    config.database, // Nome do banco de dados
    config.username, // Usuário do banco
    config.password, // Senha do banco
    {
        host: config.host,
        dialect: config.dialect, // Exemplo: 'mysql', 'postgres', etc.
        define: {
            timestamps: false, // Desativa createdAt e updatedAt por padrão
        },
    }
);

// Inicializa o modelo User
User.init(sequelize);

// Adiciona as rotas ao servidor
app.use('/usuarios', userRoutes);

// Testa a conexão com o banco e inicia o servidor
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
