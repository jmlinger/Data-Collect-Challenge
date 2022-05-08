import React from "react";
import PropTypes from 'prop-types';
import { AnswersContainer, ButtonsContainer, FieldBody, FormBody, LabelAnswer, QuestionsList, SelectLabel } from '../styles/Quiz';
import { formValidation } from "../utils/formValidations";

function Form(props) {
  const { answers, totalScore, saveAnswers, sendForms } = props;

  return (
    <>
      <FormBody data-testid="form">
        <FieldBody data-testid="form-fieldset">
          <h1 data-testid="form-title">Desafio Coleta - GRX</h1>
          <QuestionsList data-testid="form-ol">
            <li data-testid="form-li-pergunta1">
              Você se considera bom em lógica?
              <AnswersContainer>
                <input
                  type="radio"
                  name="Pergunta1"
                  id="alt1"
                  data-testid="alt1"
                  value="Sim"
                  disabled={totalScore ? true : false}
                  onClick={(e) => saveAnswers(e)}
                />
                <LabelAnswer htmlFor="alt1">
                  Sim
                </LabelAnswer>
                <input
                  type="radio"
                  name="Pergunta1"
                  id="alt2"
                  data-testid="alt2"
                  value="Não"
                  disabled={totalScore ? true : false}
                  onClick={(e) => saveAnswers(e)}
                />
                <LabelAnswer htmlFor="alt2">
                  Não
                </LabelAnswer>
              </AnswersContainer>
            </li>
            <li data-testid="form-li-pergunta2">
                Gosta de aprender com desafios?
              <AnswersContainer>
                <input
                  type="radio"
                  name="Pergunta2"
                  id="alt3"
                  data-testid="alt3"
                  value="Sim"
                  disabled={totalScore ? true : false}
                  onClick={(e) => saveAnswers(e)}
                />
                <LabelAnswer htmlFor="alt3">
                  Sim
                </LabelAnswer>
                <input
                  type="radio"
                  name="Pergunta2"
                  id="alt4"
                  data-testid="alt4"
                  value="Não"
                  disabled={totalScore ? true : false}
                  onClick={(e) => saveAnswers(e)}
                />
                <LabelAnswer htmlFor="alt4">
                  Não
                </LabelAnswer>
              </AnswersContainer>
            </li>
            <li data-testid="form-li-pergunta3">
              Gostaria de fazer parte da GRX?
              <AnswersContainer>
                <SelectLabel htmlFor='pergunta3'>
                  Escolha uma opção:
                  <select
                    name="Pergunta3"
                    id="pergunta3"
                    onChange={(e) =>
                    saveAnswers(e)}
                    disabled={totalScore ? true : false}
                  >
                    <option></option>
                    <option>Sim</option>
                    <option>Não</option>
                    <option>Não sei</option>
                    <option>Agora!!</option>
                  </select>
                </SelectLabel>
              </AnswersContainer>
            </li>
            <li data-testid="form-li-pergunta4">
                Por favor, justifique a resposta anterior.
              <AnswersContainer>
                <textarea
                  name="Pergunta4"
                  minLength="15"
                  maxLength="200"
                  disabled={totalScore ? true : false}
                  onChange={(e) => saveAnswers(e)}
                />
              </AnswersContainer>
              <p>{`${answers.Pergunta4 ? answers.Pergunta4.length : 0}/200`}</p>
            </li>
          </QuestionsList>
          <ButtonsContainer>
            <button 
              data-testid="form-sendButton"
              type='button'
              disabled={formValidation(answers).error ? true : false}
              onClick={(e) => sendForms(e)}
            >
              Enviar
            </button>
            <button
              data-testid="form-AnswerAgainButton"
              type='button'
              hidden={totalScore ? false : true}
              onClick={() => window.location.reload()}
            >
              Responder novamente
            </button>
          </ButtonsContainer>
        </FieldBody>
      </FormBody>
    </>
  );
}

export default Form;

Form.propTypes = ({
  answers: PropTypes.arrayOf(PropTypes.object),
  totalScore: PropTypes.arrayOf(PropTypes.array),
  saveAnswers: PropTypes.func,
  sendForms: PropTypes.func,
}).isRequired;