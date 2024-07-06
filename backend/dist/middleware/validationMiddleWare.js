"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = exports.businessValidation = exports.loginValidation = exports.registerValidation = void 0;
const express_validator_1 = require("express-validator");
exports.registerValidation = [
    (0, express_validator_1.body)('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
exports.loginValidation = [
    (0, express_validator_1.body)('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required'),
];
exports.businessValidation = [
    (0, express_validator_1.body)('page_id').notEmpty().withMessage('Page ID is required'),
    (0, express_validator_1.body)('details.ai_name').notEmpty().withMessage('AI name is required'),
    (0, express_validator_1.body)('details.business_name').notEmpty().withMessage('Business name is required'),
    (0, express_validator_1.body)('details.business_type').notEmpty().withMessage('Business type is required'),
    (0, express_validator_1.body)('details.address.detailedAddress').notEmpty().withMessage('Detailed address is required'),
    (0, express_validator_1.body)('details.phone').notEmpty().withMessage('Phone number is required'),
    (0, express_validator_1.body)('details.email').isEmail().withMessage('Valid email is required'),
];
exports.productValidation = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('Product name is required'),
    (0, express_validator_1.body)('price').notEmpty().withMessage('Price is required'),
    (0, express_validator_1.body)('description').notEmpty().withMessage('Description is required')
];
