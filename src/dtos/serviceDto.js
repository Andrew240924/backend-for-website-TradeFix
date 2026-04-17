'use strict';

const createServiceDto = (data) => {
  return {
    name: data.name,
    description: data.description,
    category: data.category,
    price: data.price,
  };
};

const serviceResponseDto = (service) => ({
  id: service.id,
  name: service.name,
  description: service.description,
  category: service.category,
  price: service.price,
  createdAt: service.createdAt,
  updatedAt: service.updatedAt,
});

module.exports = {
  createServiceDto,
  serviceResponseDto,
};