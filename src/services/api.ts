import axios from 'axios';

const headers = new Headers();
headers.append('Content-Type', 'text/xml')

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  // const { token } = store.getState().auth;

  const headers = { ...config.headers };

  // if (token) {
  //   headers.Authorization = `Bearer ${token}`;
  // }

  return { ...config, headers };
});

export default api;