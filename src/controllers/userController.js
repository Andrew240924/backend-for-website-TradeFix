'use strict';

const userService = require('../services/userService');

const register = async (req, res, next) => {
  try {
    const data = await userService.register(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};