const express = require('express');

const root = express.Router({ mergeParams: true });

const answers = require('./answers/router');

root.use('/answers', answers);

module.exports = root;
