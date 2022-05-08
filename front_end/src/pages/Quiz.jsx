import React, { useState } from 'react';
import Form from '../components/Form';
import Score from '../components/Score';
import { sendAnswers } from '../services/apiCalls';
import { QuizBody } from '../styles/Quiz';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState();

  const saveAnswers = ({ target: {name, value} }) => {
    setAnswers({
      ...answers,
      [name]: value,
    })
  }

  const sendForms = async () => {
    const response = await sendAnswers(answers);
    if (response.error) {
      console.log(response.error.message);
    } else {
      const sortedResponse = Object.entries(response).sort((a, b) => b[1] - a[1]);
      setTotalScore(sortedResponse);
      setAnswers({});
    }
  }

  return (
    <QuizBody>
      <Form
        answers={answers}
        saveAnswers={saveAnswers}
        sendForms={sendForms}
        totalScore={totalScore}
      />
      {totalScore && <Score totalScore={totalScore} />}
    </QuizBody>
  );
}

export default Quiz;