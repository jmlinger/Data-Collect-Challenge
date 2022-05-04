import React, { useState } from 'react';
// import "./Quiz.css"


function Quiz() {
  const [answers, setAnswers] = useState()
  
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
          <ol>
            <li>
              <label>
                Você se considera bom em lógica?
                <div>
                  <button
                    type="button"
                    name="pergunta1"
                    value="Sim"
                    onClick={(e) => handleClickAndChange(e)}
                  >
                    Sim
                  </button>
                  <button
                    type="button"
                    name="pergunta1"
                    value="Não"
                    onClick={(e) => handleClickAndChange(e)}
                  >
                    Não
                  </button>
                </div>
              </label>
            </li>
            <li>
              <label>
                Gosta de aprender com desafios?
                <div>
                  <button
                    type="button"
                    name="pergunta2"
                    value="Sim"
                    onClick={(e) => handleClickAndChange(e)}
                  >
                    Sim
                  </button>
                  <button
                    type="button"
                    name="pergunta2"
                    value="Não"
                    onClick={(e) => handleClickAndChange(e)}
                    >
                    Não
                  </button>
                </div>
              </label>
            </li>
            <li>
              <label>
                Gostaria de fazer parte da GRX?
                <select name="pergunta3" onChange={handleClickAndChange} required>
                  <option></option>
                  <option>Sim</option>
                  <option>Não</option>
                  <option>Não sei</option>
                  <option>Agora!!</option>
                </select>
              </label>
            </li>
            <li>
              <label>
                Por favor, justifique a resposta anterior.
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
              </label>
            </li>
          </ol>
          <button type='submit'>
            Enviar
          </button>
        </fieldset>
      </form>
    );
}

export default Quiz;