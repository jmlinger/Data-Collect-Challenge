const express = require('express');
const cors = require('cors');
const root = require('../controllers/root');
const { errorHandler } = require('../middlewares');

const app = express();
app.use(express.json());

app.use(cors());

app.use(root);

app.use(errorHandler);

module.exports = app;
