import { body } from 'express-validator';

export const registerValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

export const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required'),
];

export const businessValidation = [
  body('ai_name').notEmpty().withMessage('AI name is required'),
  body('ai_behavior').notEmpty().withMessage('AI behavior is required'),
  body('ai_age').notEmpty().withMessage('AI age is required'),
  body('ai_gender').notEmpty().withMessage('AI gender is required'),
  body('business_name').notEmpty().withMessage('Business name is required'),
  body('business_type').notEmpty().withMessage('Business type is required'),
  body('details.phone').notEmpty().withMessage('Phone number is required'),
  body('details.email').isEmail().withMessage('Valid email is required'),
];

export const productValidation = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('price').notEmpty().withMessage('Price is required'),
  body('description').notEmpty().withMessage('Description is required')
];