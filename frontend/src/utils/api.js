import { API_URI } from "./data"

const getResponseData = (res) => new Promise((resolve, reject) => {
  const func = res.status < 400 ? resolve : reject;
  res.json().then((data) => func(data));
});

export const postMessageRequest = (data) => {
  return fetch(`${API_URI}/messages`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then(getResponseData)
};
