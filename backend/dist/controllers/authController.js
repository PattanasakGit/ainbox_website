"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.logout = exports.login = exports.register = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const authService_1 = require("../services/authService");
const express_validator_1 = require("express-validator");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const existingUser = yield userModel_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
        const user = new userModel_1.default({ email, password });
        yield user.save();
        const token = (0, authService_1.generateToken)(user);
        const refreshToken = (0, authService_1.generateRefreshToken)(user);
        res.status(201).json({ user: { id: user._id, email: user.email }, token, refreshToken });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Registration failed. Please try again.' });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const user = yield userModel_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const isPasswordValid = yield user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = (0, authService_1.generateToken)(user);
        const refreshToken = (0, authService_1.generateRefreshToken)(user);
        res.status(200).header('Authorization', `Bearer ${token}`).json({
            user: { id: user._id, email: user.email },
            token,
            refreshToken
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Login failed. Please try again.' });
    }
});
exports.login = login;
const logout = (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
};
exports.logout = logout;
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { refreshToken: incomingRefreshToken } = req.body;
        if (!incomingRefreshToken) {
            return res.status(400).json({ error: 'Refresh token is required' });
        }
        const decodedUser = yield (0, authService_1.verifyRefreshToken)(incomingRefreshToken);
        const user = yield userModel_1.default.findById(decodedUser.userId);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        const newToken = (0, authService_1.generateToken)(user);
        const newRefreshToken = (0, authService_1.generateRefreshToken)(user);
        res.status(200).json({ token: newToken, refreshToken: newRefreshToken });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Token refresh failed. Please try again.' });
    }
});
exports.refreshToken = refreshToken;
