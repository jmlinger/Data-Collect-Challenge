import styled from 'styled-components';

export const QuizBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormBody = styled.form`
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;
  
export const FieldBody = styled.fieldset`
  align-itens: center;
  background-color: rgba(255, 250, 250, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  margin-top:3%;
  width: 50%;

  h1 {
    font-size: 45px;
    margin-bottom: 60px;
    text-align: center;
  }
`;

export const QuestionList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li:before {
    content: counter(section, number) ") ";
  }

  li {
    counter-increment: section;
    font-size: 20px;
    margin-bottom: 30px;
    text-align: center;
  }

  p {
    font-size: 15px;
    margin: 0;
  }
`;

export const AnswersContainer = styled.div`
  align-itens: center;
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 30px;
  
  input {
    display: none;
  }
  
  input:checked + label {
    background-color: #18293C;
    color: white;
  }
  
  select {
    background-color: #E0EEEE;
    border-radius: 10px;
    font-size: 20px;
    height: 40px;
    width: 150px;
  }

  textarea {
    background-color: #E0EEEE;
    border-radius: 10px;
    font-size: 20px;
    height: 100px;
    outline: none;
    text-align: justify;
    width: 400px;
  }
`;

export const LabelAnswer = styled.label`
  background-color: #E0EEEE;
  border: 2px solid;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  height: 25px;
  padding: 10px 50px;
  width: 50px;
`;

export const SelectLabel = styled.label`
  font-size: 18px;

  select {
    margin-left: 5px;
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  align-itens: center;
  display: flex;
  justify-content: center;
  
  button {
    background-color: #18293C;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-size: 15px;
    height: 40px;
    width: 48%;
    
    &:disabled {
      background-color: #A9A9A9;
      color: white;
      cursor: auto;
    }
  }
`;

export const ScoreBody = styled.fieldset`
  align-items: center;
  background-color: rgba(255, 250, 250, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  margin-top:3%;
  margin-bottom:3%;
  width: 50%;
`;

export const TotalContainer = styled.div`
  align-itens: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;

  div {
    align-itens: center;
    background-color: #18293C;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: center;
    width: 200px;
  }
`;

export const QuantityContainer = styled.div`
  align-itens: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  text-align: center;

  h3 {
    align-itens: center;
    background-color: #18293C;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: center;
    width: 200px;
  }
`;