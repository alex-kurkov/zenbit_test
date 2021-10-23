import { API_URI } from "./data"

export const postMessageRequest = (data) => {
  return fetch(`${API_URI}/messages`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  .then((res) => {
    if (res.ok) {
      return Promise.resolve(res.json())
    } else {
      return Promise.reject('error!')
    }
  })
  .catch((e) => Promise.reject(`error occured while trying to post data:\n ${e}`))
}
