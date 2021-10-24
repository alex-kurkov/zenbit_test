import { API_URI } from "./data"

export const postMessageRequest = ({ name, email, message }) => {
  const data = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  }
  return fetch(`${API_URI}/messages`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    }
  })
  .then((res) => {
    if (res.status === 201) {
      return Promise.resolve('SUCCESSFULLY SAVED');
    } else if (res.status >= 400 && res.status < 500) {
      return res.json();
    }
  })
  .catch((e) => {
    return new Error(`ERROR WHILE FETCHING:\n${e}`)
  })
};
