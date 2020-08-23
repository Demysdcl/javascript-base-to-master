import { Router } from 'express';
import studentController from './StudentController';

import loginRequired from '../../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, studentController.store);
router.get('/', studentController.index);

router.get('/:id', studentController.show);
router.put('/:id', loginRequired, studentController.update);
router.delete('/:id', loginRequired, studentController.delete);

export default router;
