import React from "react";
import PropTypes from 'prop-types';
import { QuantityContainer, ScoreBody, TotalContainer } from "../styles/Quiz";

function Score(props) {
  const { totalScore } = props;
  const answeredQuestions = totalScore.reduce((acc, cur) => acc + cur[1], 0)

  return (
    <ScoreBody data-testid="score">
      <h2>Quadro Geral de Respostas</h2>
      <TotalContainer>
        <label htmlFor="total-answers">Total</label>
        <div id="total-answers">
          <p>{answeredQuestions}</p>
        </div>
      </TotalContainer>
      {
        totalScore.map((score, index) => {
          return (
            <QuantityContainer key={index}>
              <div>
                <label htmlFor="">
                  {score[0].replace(/([A-Z])/g, ' $1').replace("Nao", "Não").trim()}
                </label>
                <h3>{score[1]}</h3>
              </div>
              <div>
                <label htmlFor="">
                  % {score[0].substring(10).replace(/([A-Z])/g, ' $1').replace("Nao", "Não").trim()}
                </label>
                <h3>
                  {Math.round(score[1]/answeredQuestions * 100)}%
                </h3>
              </div>
            </QuantityContainer>
          )
        })
      }
    </ScoreBody>
  );
}

export default Score;

Score.propTypes = ({
  totalScore: PropTypes.arrayOf(PropTypes.array),
}).isRequired;
