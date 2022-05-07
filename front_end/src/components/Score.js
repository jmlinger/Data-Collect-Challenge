import React from "react";
import PropTypes from 'prop-types';

function Score(props) {
  const { totalScore } = props;
  const answeredQuestions = totalScore.reduce((acc, cur) => acc + cur[1], 0)

  return (
    <fieldset>
      <label htmlFor="total-answers">Total</label>
      <h3 id="total-answers">
        {answeredQuestions}
      </h3>
      {
        totalScore.map((score, index) => {
          return (
            <div key={index}>
              <label htmlFor="">
                {score[0].replace(/([A-Z])/g, ' $1').replace("Nao", "Não").trim()}
              </label>
              <h3>{score[1]}</h3>
              <label htmlFor="">
                % {score[0].substring(10).replace(/([A-Z])/g, ' $1').replace("Nao", "Não").trim()}
              </label>
              <h3>
                {Math.round(score[1]/answeredQuestions * 100)}%
              </h3>
            </div>
          )
        })
      }
    </fieldset>
  );
}

export default Score;

Score.propTypes = ({
  totalScore: PropTypes.arrayOf(PropTypes.array),
}).isRequired;
