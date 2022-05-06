const express = require('express');
const root = require('../controllers/root');
const { errorHandler } = require('../middlewares');

const app = express();
app.use(express.json());

app.use(root);

app.use(errorHandler);

module.exports = app;
