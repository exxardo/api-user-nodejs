import express from 'express'
import { createUser, getAllUser, deleteUser } from "./controllers/userController.js";

// Criando uma instância do roteador do Express
const router = express.Router()

/**
 * Rota para criar um novo usuário.
 *
 * Esta rota é responsável por receber os dados necessários para criar um novo usuário e invocar a função `createUser` do controlador.
 *
 * @method POST
 * @route /create
 * @body { "name": "Nome do Usuário", "age": "Idade do Usuário", "email": "E-mail do Usuário" }
 *
 * @returns {Object} - Retorna o usuário criado com status 201 em caso de sucesso.
 */
router.post('/create', createUser)

/**
 * Rota para obter todos os usuários cadastrados.
 *
 * Esta rota é responsável por buscar todos os usuários no banco de dados e invocar a função `getAllUser` do controlador.
 *
 * @method GET
 * @route /all
 *
 * @returns {Array} - Retorna a lista de todos os usuários com status 200 em caso de sucesso.
 */
router.get('/all', getAllUser)

/**
 * Rota para deletar um usuário pelo ID.
 *
 * Esta rota é responsável por excluir um usuário com base no ID fornecido na URL da requisição.
 * A função `deleteUser` do controlador é chamada para realizar a exclusão.
 *
 * @method DELETE
 * @route /delete
 * @param {string} id - ID do usuário a ser deletado fornecido como parâmetro.
 *
 * @returns {Object} - Retorna uma mensagem de sucesso ou erro com status 200 ou 500, respectivamente.
 */
router.delete('/delete', deleteUser)

export default router
