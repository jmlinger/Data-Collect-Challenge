const fs = require('fs/promises');

const readFile = async (file) => {
  const readedFile = await fs.readFile(file, 'utf-8');
  return JSON.parse(readedFile);
};

const writeFile = async (file, data) => fs.writeFile(file, JSON.stringify(data));

module.exports = { readFile, writeFile };
