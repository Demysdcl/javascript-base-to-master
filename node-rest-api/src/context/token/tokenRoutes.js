import { Router } from 'express';
import tokenController from './TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
