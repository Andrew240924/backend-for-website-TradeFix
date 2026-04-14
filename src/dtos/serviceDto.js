'use strict';

const createServiceDto = (data) => {
  return {
    name: data.name,
    description: data.description,
    category: data.category,
    price: data.price,
  };
};

module.exports = {
  createServiceDto,
};