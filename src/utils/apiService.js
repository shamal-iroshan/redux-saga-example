import axios from "axios";

export const ApiRequestMethods = {
  POST: 'post',
  GET: 'get',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
}

export async function publicApiRequest(method, url, data = null) {
  return axios({
    method,
    url: `${process.env.REACT_APP_API_URL}${url}`,
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}