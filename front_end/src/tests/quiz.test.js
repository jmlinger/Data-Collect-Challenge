/* eslint-disable no-undef */
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Quiz from '../pages/Quiz';
import { renderWithRouter } from './testConfig';

describe('Testes unitários da página de Quiz.', () => {
  const formId = 'form';
  const formFieldsetId = 'form-fieldset';
  const formTitleId = 'form-title';
  const formOlId = 'form-ol';
  const formSendButtonId = 'form-sendButton';
  const formAnswerAgainButtonId = 'form-AnswerAgainButton';
  const scoreId = 'score';

  const answersTextList = [
    'Você se considera bom em lógica?',
    'Gosta de aprender com desafios?',
    'Gostaria de fazer parte da GRX?',
    'Por favor, justifique a resposta anterior.',
  ];

  test('Verifica se a página contêm os elementos esperados após ser renderizada.', () => {
    renderWithRouter(<Quiz />);

    const form = screen.getByTestId(formId);
    const formFieldset = screen.getByTestId(formFieldsetId);
    const formTitle = screen.getByTestId(formTitleId);
    const formOl = screen.getByTestId(formOlId);
    const formSendButton = screen.getByTestId(formSendButtonId);

    expect(form).toBeInTheDocument();
    expect(formFieldset).toBeInTheDocument();
    expect(formTitle).toBeInTheDocument();
    expect(formOl).toBeInTheDocument();
    expect(formSendButton).toBeInTheDocument();
  });

  describe('Testa o bloco de perguntas', () => {
    test("Verifica se existe quatro perguntas.", () => {
      renderWithRouter(<Quiz />)
      const formOl = screen.getByTestId(formOlId);
      const { getAllByRole } = within(formOl);
      const items = getAllByRole("listitem");
      expect(items.length).toBe(4);
    })

    describe('Testa o bloco da pergunta 1.', () => {
      test('Verifica se o bloco contém os elementos esperados.', () => {
        renderWithRouter(<Quiz />);

        const formLi1 = screen.getByText(answersTextList[0]);
        const { getByText } = within(formLi1);

        const alternative1 = getByText('Sim');
        const alternative2 = getByText('Não');

        expect(alternative1).toBeInTheDocument();
        expect(alternative2).toBeInTheDocument();
        
      });
      test('Verifica se as alternativas contém a cor esperada.', () => {
        renderWithRouter(<Quiz />);

        const formLi1 = screen.getByText(answersTextList[0]);
        const { getByText } = within(formLi1);

        const alternative1 = getByText('Sim');
        const alternative2 = getByText('Não');

        expect(alternative1).toHaveStyle({ color: '18293C' });
        expect(alternative2).toHaveStyle({ color: '18293C' });
      });
      test('Verifica se as alternativas contém as cores esperadas após serem selecionadas.', () => {
        renderWithRouter(<Quiz />);

        const formLi1 = screen.getByText(answersTextList[0]);
        const { getByText } = within(formLi1);

        const alternative1 = getByText('Sim');
        const alternative2 = getByText('Não');

        userEvent.click(alternative1);
        expect(alternative1).toHaveStyle({ color: 'white' });
        expect(alternative2).toHaveStyle({ color: '18293C' });

        userEvent.click(alternative2);
        expect(alternative1).toHaveStyle({ color: '18293C' });
        expect(alternative2).toHaveStyle({ color: 'white' });
      });
    });

    describe('Testa o bloco da pergunta 2.', () => {
      test('Verifica se o bloco contém os elementos esperados.', () => {
        renderWithRouter(<Quiz />);

        const formLi2 = screen.getByText(answersTextList[1]);
        const { getByText } = within(formLi2);

        const alternative1 = getByText('Sim');
        const alternative2 = getByText('Não');

        expect(alternative1).toBeInTheDocument();
        expect(alternative2).toBeInTheDocument();
        
      });
      test('Verifica se as alternativas contém a cor esperada.', () => {
        renderWithRouter(<Quiz />);

        const formLi2 = screen.getByText(answersTextList[1]);
        const { getByText } = within(formLi2);

        const alternative1 = getByText('Sim');
        const alternative2 = getByText('Não');

        expect(alternative1).toHaveStyle({ color: '18293C' });
        expect(alternative2).toHaveStyle({ color: '18293C' });
      });
      test('Verifica se as alternativas contém as cores esperadas após serem selecionadas.', () => {
        renderWithRouter(<Quiz />);

        const formLi2 = screen.getByText(answersTextList[1]);
        const { getByText } = within(formLi2);

        const alternative1 = getByText('Sim');
        const alternative2 = getByText('Não');

        userEvent.click(alternative1);
        expect(alternative1).toHaveStyle({ color: 'white' });
        expect(alternative2).toHaveStyle({ color: '18293C' });

        userEvent.click(alternative2);
        expect(alternative1).toHaveStyle({ color: '18293C' });
        expect(alternative2).toHaveStyle({ color: 'white' });
      });
    });

    describe('Testa o bloco da pergunta 3.', () => {
      test('Verifica se o bloco contém os elementos esperados.', () => {
        renderWithRouter(<Quiz />);

        const formLi3 = screen.getByText(answersTextList[2]);
        const { getByText } = within(formLi3);

        const alternative1 = getByText('Sim');
        const alternative2 = getByText('Não');
        const alternative3 = getByText('Não sei');
        const alternative4 = getByText('Agora!!');

        expect(alternative1).toBeInTheDocument();
        expect(alternative2).toBeInTheDocument();
        expect(alternative3).toBeInTheDocument();
        expect(alternative4).toBeInTheDocument();
        
      });  
    });

    describe('Testa o bloco da pergunta 4.', () => {
      test('Verifica se o bloco contém os elementos esperados.', () => {
        renderWithRouter(<Quiz />);

        const formLi4 = screen.getByText(answersTextList[3]);
        const { getByRole, getByText } = within(formLi4);
        const textarea = getByRole('textbox');
        const characterCounter = getByText(/200/i);

        expect(textarea).toBeInTheDocument();
        expect(characterCounter).toBeInTheDocument();
      });  
    });
  });

  describe('Testa o botão de enviar.', () => {
    test('Verifica se ao entrar na página o botão de enviar está desabilitado.', () => {
      renderWithRouter(<Quiz />);
  
      const formSendButton = screen.getByTestId(formSendButtonId);
      expect(formSendButton).toBeDisabled();
    });
  
    test('Verifica se ao responder as perguntas corretamente o botão de enviar é habilitado.', () => {
      renderWithRouter(<Quiz />);

      const alt1Quest1 = screen.getByTestId('alt1');
      const alt2Quest2 = screen.getByTestId('alt4');

      const textarea = screen.getByRole('textbox');

      userEvent.click(alt1Quest1);
      userEvent.click(alt2Quest2);
      userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', {name: 'Não sei'}));
      userEvent.type(textarea, 'xxxxxxxxxxxxxxxx');

      const formSendButton = screen.getByTestId(formSendButtonId);
      expect(formSendButton).toBeEnabled();
    });
    
    test(`Verifica se ao clicar no botão de enviar o botão responder novamente aparece,
      assim como o quadro de respostas.`, async() => {
      renderWithRouter(<Quiz />);

      const alt1Quest1 = screen.getByTestId('alt1');
      const alt2Quest2 = screen.getByTestId('alt4');

      const textarea = screen.getByRole('textbox');

      userEvent.click(alt1Quest1);
      userEvent.click(alt2Quest2);
      userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', {name: 'Não sei'}));
      userEvent.type(textarea, 'xxxxxxxxxxxxxxxx');

      const formSendButton = screen.getByTestId(formSendButtonId);
      userEvent.click(formSendButton);

      await new Promise((r) => setTimeout(r, 1000));

      const formAnswerAgainButton = screen.getByTestId(formAnswerAgainButtonId);
      const score = screen.getByTestId(scoreId);
      expect(formAnswerAgainButton).toBeVisible();
      expect(score).toBeInTheDocument();

    });

  });
});
// const taskNameInput = screen.getByTestId(taskNameId);
// const addTaskButton = screen.getByTestId(addTaskId);

// taskList.forEach((task) => {
//   userEvent.type(taskNameInput, task);
//   userEvent.click(addTaskButton);
//   const taskName = screen.getByText(task);
//   // const statusTH = screen.getByRole('columnheader', { name: 'Status' });
//   // const status = within(statusTH).getByRole('cell', { name: defaultStatus });
//   expect(taskName).toBeInTheDocument();
//   // expect(status).toBeInTheDocument();
// });