import express from 'express'
import {createUser, getAllUser, deleteUser} from "./controllers/userController.js";

const router = express.Router()

router.post('/create', createUser)
router.get('/all', getAllUser)
router.delete('/delete', deleteUser)

export default router