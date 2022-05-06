const { writeFile, readFile } = require('../../utils/fileHandler');

const answersTxt = 'src/answers.json';

module.exports = async (answers) => {
  const readedFile = await readFile(answersTxt);

  await writeFile(answersTxt, [...readedFile, answers]);

  return readFile(answersTxt);
};
