import { Router } from 'express';
import { register, login, logout, refreshToken } from '../controllers/authController';
import { registerValidation, loginValidation, businessValidation, productValidation } from '../middleware/validationMiddleware';
import { authMiddleware } from '../middleware/authMiddleware';
import { createBusiness } from '../controllers/businessController';
import { createProduct, getProducts } from '../controllers/productController';

const router = Router();

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.post('/logout', authMiddleware, logout);
router.post('/refresh-token', refreshToken);

router.post('/business', authMiddleware, createBusiness);


router.post('/product', authMiddleware, productValidation, createProduct);
router.get('/getProduct', authMiddleware, getProducts); 

export default router;