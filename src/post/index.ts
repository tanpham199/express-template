import { Router } from 'express';
import getAll from './controllers/getAll';
import getById from './controllers/getById';
import create from './controllers/create';

const root = Router();

root.get('/', getAll);
root.get('/details/:postId', getById);
root.post('/create', create);

export default root;
