import { Router } from 'express';
import loginRequired from '../../middlewares/loginRequired';

import photoController from './PhotoController';

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
