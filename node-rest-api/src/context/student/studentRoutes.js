import { Router } from 'express';
import studentController from './StudentController';

const router = new Router();

router.post('/', studentController.store);
router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

export default router;
