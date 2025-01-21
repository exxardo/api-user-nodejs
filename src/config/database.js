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