import axios from 'axios';

async function sendAnswers(answers) {
  try {
    const url = 'http://localhost:3001/answers';

    const fetchApi = await axios.post(url, answers);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
}

export {
  sendAnswers
}