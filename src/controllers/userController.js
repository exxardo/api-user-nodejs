import User from '../models/User.js';
import httpStatusCode from '../config/httpStatusCodes.js';
import crypto from 'node:crypto';


// Criar usuário
export const createUser = async (req, res) => {
    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        };

        // Criação do usuário com o objeto correto
        const user = await User.create(userToCreate);

        res.status(httpStatusCode.CREATED).json(user);
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};
export const getAllUser = () => (req, res) => {

    res.status(200).json({message:"Cadastrado com sucesso"})

}

export const deleteUser = () => (req, res) => {

    res.status(200).json({message:"Cadastrado com sucesso"})

}