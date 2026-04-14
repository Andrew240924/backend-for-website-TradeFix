'use strict';

const { User } = require('../models');

const create = async (data) => {
  return await User.create(data);
};

const findByLogin = async (login) => {
  return await User.findOne({
    where: { login },
  });
};

const findById = async (id) => {
  return await User.findByPk(id);
};

module.exports = {
  create,
  findByLogin,
  findById,
};