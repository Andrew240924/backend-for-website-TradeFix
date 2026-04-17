'use strict';

const createProductDto = (data, file) => {
  return {
    name: data.name,
    description: data.description,
    price: data.price,
    category: data.category,
    image: file ? `/uploads/${file.filename}` : undefined,
  };
};

const productResponseDto = (product) => ({
  id: product.id,
  name: product.name,
  description: product.description,
  price: product.price,
  category: product.category,
  image: product.image ?? null,
  createdAt: product.createdAt,
  updatedAt: product.updatedAt,
});

module.exports = {
  createProductDto,
  productResponseDto,
};