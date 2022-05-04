import React from 'react';
import "./Quiz.css"


function Quiz() {
    return (
      <form>
        <fieldset>
          <ol>
            <li>
              <label>
                Você se considera bom em lógica?
                <div>
                  <button type="button" >Não</button>
                  <button type="button" >Sim</button>
                </div>
              </label>
            </li>
            <li>
              <label>
                Gosta de aprender com desafios?
                <div>
                  <button type="button" >Não</button>
                  <button type="button" >Sim</button>
                </div>
              </label>
            </li>
            <li>
              <label>
                Gosta de aprender com desafios?
                <select required>
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