'use strict';

const createProductDto = (data) => {
  return {
    name: data.name,
    description: data.description,
    price: data.price,
    category: data.category,
    image: data.image,
  };
};

module.exports = {
  createProductDto,
};