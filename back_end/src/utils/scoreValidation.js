const rulesMatrix = [
  ['QuantidadePositiva', 'Sim', 1],
  ['QuantidadeNegativa', 'Não', 1],
  ['QuantidadeNaoAvaliada', 'Não sei', 1],
  ['QuantidadePositiva', 'Agora!!', 2],
];

module.exports = (answers) => {
  const score = {
    QuantidadePositiva: 0,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0,
  };

  Object.values(answers).forEach((answer) => {
    const matchedRule = rulesMatrix.find((rule) => rule[1] === answer);
    
    if (matchedRule) {
      score[matchedRule[0]] += matchedRule[2];
    } 
  });

return { ...answers, ...score };
};