'use strict';
const { Op } = require('sequelize');

const { Product } = require('../models');

const create = async (data) => {
  return await Product.create(data);
};

const findAll = async (filters) => {
  const where = {};

  if (filters.category) {
    where.category = filters.category;
  }

  if (filters.minPrice || filters.maxPrice) {
    where.price = {};

    if (filters.minPrice) {
      where.price[Op.gte] = parseFloat(filters.minPrice);
    }

    if (filters.maxPrice) {
      where.price[Op.lte] = parseFloat(filters.maxPrice);
    }
  }

  return await Product.findAll({ where });
};

const findById = async (id) => {
  return await Product.findByPk(id);
};

const updateById = async (id, data) => {
  const [updated] = await Product.update(data, {
    where: { id },
  });

  return updated;
};

const deleteById = async (id) => {
  return await Product.destroy({
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