const answersServices = require('../../services/answers');

module.exports = async (req, res, _next) => {
  const answers = req.body;

  const result = await answersServices.create(answers);

  return res.status(result.status).json(result.message);
};
