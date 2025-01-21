import User from '../models/User.js'
import httpStatusCode from '../config/httpStatusCodes.js'
import crypto from 'node:crypto'


// Criar usuário
export const createUser = async (req, res) => {
    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }

        // Criação do usuário com o objeto correto
        const user = await User.create(userToCreate)

        res.status(httpStatusCode.CREATED).json(user)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }
}
export const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(httpStatusCode.OK).json(users)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }

}

export const deleteUser = async (req, res) => {
    try {
        const user =  await User.destroy({
            where: {id: req.params.id}
        })
        res.status(httpStatusCode.OK).json(user)
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: error.message })
    }

}