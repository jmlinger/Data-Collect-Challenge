import React, { useState } from 'react';
import { AnswersContainer, QuestionList } from '../styles/Quiz';

function Quiz() {
  const [answers, setAnswers] = useState({})
  
  // console.log(answers);
  const handleClickAndChange = ({ target: {name, value} }) => {
    
    setAnswers({
      ...answers,
      [name]: value,
    })
  }

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
          <button type='submit' disabled={Object.keys(answers).length !== 4}>
            Enviar
          </button>
        </fieldset>
      </form>
    );
}

export default Quiz;