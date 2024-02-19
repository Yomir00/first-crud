import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import { router as userApi } from './routes/user.route';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.json({ message: 'Server is running' });
});

app.get('/user', userApi);

app.post('/users', userApi);

app.listen(PORT, () => {
	console.log('Server started on port 3000');
});
