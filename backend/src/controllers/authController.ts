import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import { generateToken, generateRefreshToken, verifyRefreshToken } from '../services/authService';
import { validationResult } from 'express-validator';

export const register = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const user = new User({ email, password });
    await user.save();
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    res.status(201).json({ user: { id: user._id, email: user.email }, token, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    res.status(200).header('Authorization', `Bearer ${token}`).json({
      user: { id: user._id, email: user.email },
      token,
      refreshToken
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
};


export const logout = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Logged out successfully' });
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken: incomingRefreshToken } = req.body;
    if (!incomingRefreshToken) {
      return res.status(400).json({ error: 'Refresh token is required' });
    }

    const decodedUser = await verifyRefreshToken(incomingRefreshToken);
    const user = await User.findById(decodedUser.userId);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const newToken = generateToken(user);
    const newRefreshToken = generateRefreshToken(user);

    res.status(200).json({ token: newToken, refreshToken: newRefreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Token refresh failed. Please try again.' });
  }
};
