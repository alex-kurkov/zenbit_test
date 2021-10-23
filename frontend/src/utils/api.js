import { API_URI } from "./data"

export const postMessageRequest = (data) => {
  return fetch(`${API_URI}/messages`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    }
  })
  .then((res) => {
    if (res.status < 400) return Promise.resolve('SUCCESSFULLY SAVED');
  })
  .catch((e) => {
    return new Error(`ERROR WHILE FETCHING:\n${e}`)
  })
};
