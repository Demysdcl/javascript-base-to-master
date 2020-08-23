import { Router } from 'express';
import userController from './UserController';
import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/showme', loginRequired, userController.show);

router.post('/', userController.store);

router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
