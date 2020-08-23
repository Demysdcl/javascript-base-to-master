import { Router } from 'express';

import photoController from './PhotoController';

const router = new Router();

router.post('/', photoController.store);

export default router;
