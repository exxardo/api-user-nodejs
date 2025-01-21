import Sequelize, { Model } from 'sequelize'

/**
 * Classe `User` que representa o modelo de usuário no banco de dados.
 *
 * A classe herda de `Model` do Sequelize, o que permite que ela seja usada para interagir com a tabela de usuários no banco de dados.
 * O modelo é inicializado com os atributos `name`, `age` e `email`, que são mapeados para as colunas da tabela.
 * A função `init` é chamada para definir os atributos do modelo e a associação com o banco de dados.
 */
class User extends Model {
    /**
     * Método estático para inicializar o modelo `User`.
     *
     * Este método configura os atributos do modelo (colunas) e as propriedades do Sequelize, como `allowNull` e os tipos de dados.
     * Também faz a associação entre o modelo e a instância do banco de dados `sequelize`.
     *
     * @param {Object} sequelize - A instância do Sequelize que é usada para definir o modelo e as configurações do banco de dados.
     *
     * @returns {void} - Inicializa o modelo `User` e associa as configurações fornecidas.
     */
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            }
        }, { sequelize })
    }
}
export default User
