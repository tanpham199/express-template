import { Router } from 'express';
import getAll from './controllers/getAll';
import create from './controllers/create';

const root = Router();

root.get('/', getAll);
root.post('/create/:serviceId', create);

export default root;
