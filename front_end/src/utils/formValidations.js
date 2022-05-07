const Joi = require('joi');

const minCharacter = 15;
const maxCharacter = 200;

const formSchema = Joi.object({
  Pergunta1: Joi.string().required(),
  Pergunta2: Joi.string().required(),
  Pergunta3: Joi.string().required(),
  Pergunta4: Joi.string().min(minCharacter).max(maxCharacter).required()
});

module.exports = {
  formValidation: (register) => formSchema.validate(register),
};
