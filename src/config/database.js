/**
 * Arquivo de configuração do Sequelize para conectar ao banco de dados PostgreSQL.
 *
 * O Sequelize é um ORM (Object-Relational Mapper) para Node.js que facilita a interação com o banco de dados.
 * Este arquivo configura as informações de conexão com o banco de dados PostgreSQL e define algumas opções de estilo de nomenclatura.
 */
export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'db_users',
    define:  {
        timestamps: true,
        underscored: true,
        underscoreAll: true,
    }
}