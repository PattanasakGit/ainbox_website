import { Router } from 'express';
import authRoutes from './authRoute';

const router = Router();

router.use('/auth', authRoutes);

export default router;