'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'products',
    timestamps: true,
  });

  return Product;
};