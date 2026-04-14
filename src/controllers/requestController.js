'use strict';

const requestService = require('../services/requestService');

const { createRequestDto } = require('../dtos/requestDto');

const create = async (req, res, next) => {
  try {
    const dto = createRequestDto(req.body);

    const request = await requestService.create(dto);
    res.status(201).json(request);
  } catch (err) {
    next(err);
  }
};

const findAll = async (req, res, next) => {
  try {
    const requests = await requestService.findAll();
    res.json(requests);
  } catch (err) {
    next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const request = await requestService.findById(req.params.id);
    res.json(request);
  } catch (err) {
    next(err);
  }
};

const updateById = async (req, res, next) => {
  try {
    const request = await requestService.updateById(req.params.id, req.body);
    res.json(request);
  } catch (err) {
    next(err);
  }
};

const deleteById = async (req, res, next) => {
  try {
    await requestService.deleteById(req.params.id);
    res.json({ message: 'Request deleted' });
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