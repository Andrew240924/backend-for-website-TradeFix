'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRepository = require('../repositories/userRepository');
const AppError = require('../utils/AppError');

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXPIRES_IN = '7d';

const register = async (data) => {
  const { login, password } = data;

  if (!login || !password) {
    throw new AppError('Login and password required', 400);
  }

  const existingUser = await userRepository.findByLogin(login);

  if (existingUser) {
    throw new AppError('User already exists', 400);
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await userRepository.create({
    login,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user.id,
      login: user.login,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return {
    accessToken: token,
  };
};

const login = async (data) => {
  const { login, password } = data;

  if (!login || !password) {
    throw new AppError('Login and password required', 400);
  }

  const user = await userRepository.findByLogin(login);

  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = jwt.sign(
    {
      id: user.id,
      login: user.login,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return {
    accessToken: token,
  };
};

module.exports = {
  register,
  login,
};