import { Router } from 'express';
import homeController from './HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
