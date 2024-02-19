import { Router } from 'express';
import {
	addUserHandler,
	deleteUser,
	getUserById,
	getUsers,
	updateUser,
} from '../controllers/user.controller';

export const router = Router();

router.get('/users', getUsers);
router.get('/id', getUserById);
router.post('/users', addUserHandler);
router.patch('/id', updateUser);
router.delete('/users', deleteUser);
