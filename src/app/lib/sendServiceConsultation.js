import { fetchAPI } from './api';

export const sendServiceConsultation = async (data) => {
  const url = '/form-services';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  };

  try {
    await fetchAPI(url, {}, options);
    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw Error('Sending error');
  }
};
