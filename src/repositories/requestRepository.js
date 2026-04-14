'use strict';

const { Request, Service } = require('../models');

const create = async (data) => {
  return await Request.create(data);
};

const findAll = async () => {
  return await Request.findAll({
    include: [
      {
        model: Service,
        attributes: ['id', 'name', 'price'],
      },
    ],
  });
};

const findById = async (id) => {
  return await Request.findByPk(id, {
    include: [
      {
        model: Service,
        attributes: ['id', 'name', 'price'],
      },
    ],
  });
};

const updateById = async (id, data) => {
  const [updated] = await Request.update(data, {
    where: { id },
  });

  return updated;
};

const deleteById = async (id) => {
  return await Request.destroy({
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