import User from '../models/User.js'
import httpStatusCode from '../config/httpStatusCodes.js'
import crypto from 'node:crypto'

/**
 * Função para criar um novo usuário.
 *
 * Esta função é responsável por criar um novo usuário no banco de dados com base nos dados fornecidos na requisição.
 * O usuário é criado com um ID único gerado utilizando o `crypto.randomUUID()` para garantir a unicidade do identificador.
 *
 * @param {Object} req - Objeto da requisição, que contém os dados necessários para criar o usuário (nome, idade, e-mail).
 * @param {Object} res - Objeto da resposta, utilizado para enviar a resposta ao cliente.
 *
 * @returns {void} - Resposta é enviada diretamente ao cliente com o status HTTP adequado:
 *    - 201 (Created) se o usuário for criado com sucesso.
 *    - 500 (Internal Server Error) se ocorrer um erro durante a criação.
 */
export const createUser = async (req, res) => {
    try {
        // Criando um objeto 'userToCreate' com os dados enviados na requisição
        const userToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }
        const user = await User.create(userToCreate)
        res.status(httpStatusCode.CREATED).json(user)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
}

/**
 * Função para buscar todos os usuários cadastrados.
 *
 * Esta função é responsável por buscar e retornar todos os usuários registrados no banco de dados.
 *
 * @param {Object} req - Objeto da requisição (não utilizado diretamente nesta função, mas necessário para conformidade com a estrutura do Express).
 * @param {Object} res - Objeto da resposta, utilizado para enviar a lista de usuários ou erro ao cliente.
 */
export const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll()

        res.status(httpStatusCode.OK).json(users)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
}

/**
 * Função para deletar um usuário pelo ID.
 *
 * Esta função é responsável por excluir um usuário do banco de dados com base no ID fornecido nos parâmetros da requisição.
 * O ID é retirado da URL da requisição e utilizado para localizar e deletar o usuário correspondente.
 *
 * @param {Object} req - Objeto da requisição, contendo o ID do usuário a ser deletado nos parâmetros da URL (`req.params.id`).
 * @param {Object} res - Objeto da resposta, utilizado para enviar uma confirmação ou erro de exclusão ao cliente.
 */
export const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: {id: req.params.id}
        })
        res.status(httpStatusCode.OK).json(user)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }