const { StatusCodes } = require('http-status-codes');
const answersModels = require('../../models/answers');
const scoreValidation = require('../../utils/scoreValidation');

module.exports = async (answers) => {
  const answersWithScore = scoreValidation(answers);

  const allAnswers = await answersModels.create(answersWithScore);

  const totalScore = allAnswers.reduce((acc, cur) => ({
      QuantidadePositiva: acc.QuantidadePositiva + cur.QuantidadePositiva,
      QuantidadeNegativa: acc.QuantidadeNegativa + cur.QuantidadeNegativa,
      QuantidadeNaoAvaliada: acc.QuantidadeNaoAvaliada + cur.QuantidadeNaoAvaliada,
    }),
  {
    QuantidadePositiva: 0,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0,
  });

  return { status: StatusCodes.CREATED, message: totalScore };
};
