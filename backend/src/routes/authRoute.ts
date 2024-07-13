import { Router } from 'express';
import { register, login, logout, refreshToken } from '../controllers/authController';
import { registerValidation, loginValidation, businessValidation, productValidation } from '../middleware/validationMiddleware';
import { authMiddleware } from '../middleware/authMiddleware';
import { createStore } from '../controllers/storedbController';
import { createBusiness, deleteBusinessById, getBusinessById, getBusinesses, updateBusinessById } from '../controllers/businessController';
import { createProduct, getProductById, getProducts, updateProductById } from '../controllers/productController';

const router = Router();

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.post('/logout', authMiddleware, logout);
router.post('/refresh-token', refreshToken);

//Store_db routes
router.post('/createStore/:destination', authMiddleware, createStore);

// Product routes
router.post('/business', authMiddleware, businessValidation, createBusiness);
router.get('/getBusinesses/:userId', authMiddleware, getBusinesses);
router.get('/getBusiness/:id', authMiddleware, getBusinessById);
router.patch('/updateBusiness/:id', authMiddleware, updateBusinessById);
router.delete('/deleteBusiness/:id', authMiddleware, deleteBusinessById);

// Product routes
router.post('/product', authMiddleware, productValidation, createProduct);
router.get('/getProducts/:businessId', authMiddleware, getProducts);
router.get('/getProduct/:id', authMiddleware, getProductById);
router.patch('/updateProduct/:id', authMiddleware, updateProductById);
router.delete('/deleteProduct/:id', authMiddleware, getProductById);

export default router;