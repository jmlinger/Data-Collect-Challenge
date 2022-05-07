import React, { useState } from 'react';
import Form from '../components/Form';
import Score from '../components/Score';
import { sendAnswers } from '../services/apiCalls';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState();
  
  console.log(totalScore);
  const saveAnswers = ({ target: {name, value} }) => {
    setAnswers({
      ...answers,
      [name]: value,
    })
  }

  const sendForms = async () => {
    const response = await sendAnswers(answers);
    const sortedResponse = Object.entries(response).sort((a, b) => b[1] - a[1]);
    setTotalScore(sortedResponse);
    setAnswers({});
  }

  return (
    <>
      <Form
        answers={answers}
        saveAnswers={saveAnswers}
        sendForms={sendForms}
        totalScore={totalScore}
      />
      {totalScore && <Score totalScore={totalScore} />}
    </>
  );
}

export default Quiz;