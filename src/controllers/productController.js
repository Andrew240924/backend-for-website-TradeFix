'use strict';

const productService = require('../services/productService');

const { createProductDto } = require('../dtos/productDto');

const create = async (req, res, next) => {
  try {
    const dto = createProductDto(req.body);

    const product = await productService.create(dto);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

const findAll = async (req, res, next) => {
  try {
    const products = await productService.findAll(req.query);
    res.json(products);
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const product = await productService.findById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};

const updateById = async (req, res, next) => {
  try {
    await productService.updateById(req.params.id, req.body);
    res.json({ message: 'Product updated' });
  } catch (err) {
    next(err);
  }
};

const deleteById = async (req, res, next) => {
  try {
    await productService.deleteById(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};