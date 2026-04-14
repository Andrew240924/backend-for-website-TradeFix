'use strict';

const AppError = require('../utils/AppError');

module.exports = (req, res, next) => {
  // допустим админ всегда id = 1
  if (req.user.id !== 1) {
    return next(new AppError('Access denied', 403));
  }

  next();
};