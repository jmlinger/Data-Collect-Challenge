import React from "react";
import PropTypes from 'prop-types';
import { AnswersContainer, QuestionList } from '../styles/Quiz';
import { formValidation } from "../utils/formValidations";

function Form(props) {
  const { answers, totalScore, saveAnswers, sendForms } = props;

  return (
    <form>
      <fieldset>
        <QuestionList>
          <li>
            <p>
              Você se considera bom em lógica?
            </p>
            <AnswersContainer>
              <input
                type="radio"
                name="Pergunta1"
                id='alt1'
                value="Sim"
                disabled={totalScore ? true : false}
                onClick={(e) => saveAnswers(e)}
              />
              <label htmlFor='alt1'>
                Sim
              </label>
              <input
                type="radio"
                name="Pergunta1"
                id='alt2'
                value="Não"
                disabled={totalScore ? true : false}
                onClick={(e) => saveAnswers(e)}
              />
              <label htmlFor='alt2'>
                Não
              </label>
            </AnswersContainer>
          </li>
          <li>
            <p>
              Gosta de aprender com desafios?
            </p>
            <AnswersContainer>
              <input
                type="radio"
                name="Pergunta2"
                id='alt3'
                value="Sim"
                disabled={totalScore ? true : false}
                onClick={(e) => saveAnswers(e)}
              />
              <label htmlFor='alt3'>
                Sim
              </label>
              <input
                type="radio"
                name="Pergunta2"
                id='alt4'
                value="Não"
                disabled={totalScore ? true : false}
                onClick={(e) => saveAnswers(e)}
              />
              <label htmlFor='alt4'>
                Não
              </label>
            </AnswersContainer>
          </li>
          <li>
            <p>
              Gostaria de fazer parte da GRX?
            </p>
              <select name="Pergunta3" onChange={(e) => saveAnswers(e)} disabled={totalScore ? true : false}>
                <option></option>
                <option>Sim</option>
                <option>Não</option>
                <option>Não sei</option>
                <option>Agora!!</option>
              </select>
          </li>
          <li>
            <p>
              Por favor, justifique a resposta anterior.
            </p>
            <textarea
              name="Pergunta4"
              cols="30"
              rows="10"
              minLength="15"
              maxLength="200"
              resize= "none"
              disabled={totalScore ? true : false}
              onChange={(e) => saveAnswers(e)}
            />
            <p>{`${answers.Pergunta4 ? answers.Pergunta4.length : 0}/200`}</p>
          </li>
        </QuestionList>
        <button
          type='button'
          disabled={formValidation(answers).error ? true : false}
          onClick={(e) => sendForms(e)}
        >
          Enviar
        </button>
        <button
          type='button'
          hidden={totalScore ? false : true}
          onClick={() => window.location.reload()}
        >
          Responder novamente
        </button>
      </fieldset>
    </form>
  );
}

export default Form;

Form.propTypes = ({
  answers: PropTypes.arrayOf(PropTypes.object),
  totalScore: PropTypes.arrayOf(PropTypes.array),
  saveAnswers: PropTypes.func,
  sendForms: PropTypes.func,
}).isRequired;