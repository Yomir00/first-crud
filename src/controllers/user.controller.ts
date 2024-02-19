import { Request, Response } from 'express';
import { users } from '../data/user.data';
import { User } from '../types/user.type';
import { v4 as uuidv4 } from 'uuid';
export const getUsers = (req: Request, res: Response) => {
	res.status(200).json(users);
};

export const getUserById = (req: Request, res: Response) => {
	const id = +req.params.id;
	const userFound = users.find((user) => +user.id === id);
	if (userFound) {
		res.status(200).json(userFound);
	} else {
		res.status(400).json({ message: 'User not found' });
	}
};
export const addUserHandler = (req: Request, res: Response) => {
	const user: User = req.body;
	users.push({ ...user, id: uuidv4() });
	res.status(200).json(users);
};

export const updateUser = (req: Request, res: Response) => {
	const user = users.find((user) => user.id === req.params.id);

	if (user) {
		Object.assign(user, req.body);
		res.status(200).json(user);
	} else {
		res.status(404).json({ message: 'User not found' });
	}
};
export const deleteUser = (req: Request, res: Response) => {
	const index = users.findIndex((user) => user.id === req.params.id);
	if (index !== -1) {
		users.splice(index, 1);
		res.json({ message: 'User deleted successfully' });
		message: 'user deleted ';
	} else {
		res.status(404).json({ message: 'User not found' });
	}
};
