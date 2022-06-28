const express = require('express');
const cors = require('cors');
const root = require('../controllers/root');
const { errorHandler } = require('../middlewares');

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use(root);

app.use(errorHandler);

module.exports = app;
