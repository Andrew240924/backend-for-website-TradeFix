'use strict';

require('dotenv').config();

const express = require('express');
const { connectDB } = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const requestRoutes = require('./routes/requestRoutes');
const userRoutes = require('./routes/userRoutes');

const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

// ТЗ требует /api/*
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/auth', userRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectDB();

  const { sequelize } = require('./models');
  await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

start();