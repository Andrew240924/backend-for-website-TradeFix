'use strict';

const { sequelize } = require('../config/db');

const User = require('./User')(sequelize);
const Product = require('./Product')(sequelize);
const Service = require('./Service')(sequelize);
const Request = require('./Request')(sequelize);

// связи только по ТЗ
Service.hasMany(Request, { foreignKey: 'serviceId' });
Request.belongsTo(Service, { foreignKey: 'serviceId' });

module.exports = {
  sequelize,
  User,
  Product,
  Service,
  Request,
};