'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Service', {
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

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'services',
    timestamps: true,
  });
};