import styled from 'styled-components';

export const QuestionList = styled.ol`
    list-style-type:none;

    li:before {
      content: counter(section, number) ") ";
    }

    li {
      counter-increment: section;
    }
`;

export const AnswersContainer = styled.div`
  display: flex;
  align-itens: center;
  gap: 10px;
  justify-content: center;
  
  label {
    background-color: red;
    border: 2px solid;
    cursor: pointer;
    padding: 10px 50px;
  }
  
  input {
    display: none;
  }
  
  input:checked + label {
    background-color: green;
    color: white;
  }
`;
