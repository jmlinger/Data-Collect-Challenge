const { writeFile } = require('./fileHandler');

const answersTxt = 'src/answers.json';

const clearDb = async () => {
  try {
    await writeFile(answersTxt, []);
    console.log('DB cleared!');
  } catch (error) {
    console.error(error.message);
  }
};

clearDb();
