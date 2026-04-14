'use strict';

const { Service } = require('../models');

const create = async (data) => {
  return await Service.create(data);
};

const findAll = async () => {
  return await Service.findAll();
};

const findById = async (id) => {
  return await Service.findByPk(id);
};

const updateById = async (id, data) => {
  const [updated] = await Service.update(data, {
    where: { id },
  });

  return updated;
};

const deleteById = async (id) => {
  return await Service.destroy({
    where: { id },
  });
};

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};