'use strict';

const serviceService = require('../services/serviceService');

const create = async (req, res, next) => {
  try {
    const service = await serviceService.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    next(err);
  }
};

const findAll = async (req, res, next) => {
  try {
    const services = await serviceService.findAll();
    res.json(services);
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const service = await serviceService.findById(req.params.id);
    res.json(service);
  } catch (err) {
    next(err);
  }
};

const updateById = async (req, res, next) => {
  try {
    await serviceService.updateById(req.params.id, req.body);
    res.json({ message: 'Service updated' });
  } catch (err) {
    next(err);
  }
};

const deleteById = async (req, res, next) => {
  try {
    await serviceService.deleteById(req.params.id);
    res.json({ message: 'Service deleted' });
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