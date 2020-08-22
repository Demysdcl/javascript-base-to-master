import { Router } from 'express';
import userController from './UserController';

const router = new Router();

router.post('/', userController.post);

export default router;
