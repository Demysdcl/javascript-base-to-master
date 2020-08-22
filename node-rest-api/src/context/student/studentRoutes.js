import { Router } from 'express';
import studentController from './StudentController';

const router = new Router();

router.post('/', studentController.post);

export default router;
