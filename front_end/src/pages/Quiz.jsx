import React, { useState } from 'react';
import { sendAnswers } from '../services/apiCalls';
import { AnswersContainer, QuestionList } from '../styles/Quiz';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState([]);
  
  // console.log(answers);
  const handleClickAndChange = ({ target: {name, value} }) => {
    setAnswers({
      ...answers,
      [name]: value,
    })
  }

  const sendForms = async () => {
    const response = await sendAnswers(answers);
    const sortedResponse = Object.entries(response).sort((a, b) => b[1] - a[1])
    setTotalScore(sortedResponse);
  }

  const answeredQuestions = totalScore.reduce((acc, cur) => acc[1] + cur[1], 0)

  return (
    <>
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
                  name="pergunta1"
                  id='alt1'
                  value="Sim"
                  onClick={(e) => handleClickAndChange(e)}
                />
                <label htmlFor='alt1'>
                  Sim
                </label>
                <input
                  type="radio"
                  name="pergunta1"
                  id='alt2'
                  value="Não"
                  onClick={(e) => handleClickAndChange(e)}
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
                  name="pergunta2"
                  id='alt3'
                  value="Sim"
                  onClick={(e) => handleClickAndChange(e)}
                />
                <label htmlFor='alt3'>
                  Sim
                </label>
                <input
                  type="radio"
                  name="pergunta2"
                  id='alt4'
                  value="Não"
                  onClick={(e) => handleClickAndChange(e)}
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
                <select name="pergunta3" onChange={handleClickAndChange} required>
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
                name="pergunta4"
                onChange={handleClickAndChange}
                cols="30"
                rows="10"
                minLength="15"
                maxLength="200"
                resize= "none"
                required
              />
              <p>{`${answers.pergunta4 ? answers.pergunta4.length : 0}/200`}</p>
            </li>
          </QuestionList>
          <button
            type='submit'
            disabled={Object.keys(answers).length !== 4}
            onClick={() => sendForms()}
          >
            Enviar
          </button>
        </fieldset>
      </form>
      <fieldset>
        <label htmlFor="total-answers">Total</label>
        <h3 id="total-answers">
          {answeredQuestions}
        </h3>
        {
          totalScore.map((score) => {
            <div>
              <label htmlFor="">{score[0]}l</label>
              <h3>{score[1]}</h3>
              <label htmlFor="">
                %{score[0].substring(9)}
              </label>
              <h3>
                {score[1]/answeredQuestions * 100}%
              </h3>
            </div>
          })
        }
      </fieldset>
    </>
  );
}

export default Quiz;