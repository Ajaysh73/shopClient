import axios from 'axios';
console.log('in make request');
export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    Authorization: 'bearer ' + `${import.meta.env.VITE_REACT_APP_API_TOKEN}`,
  },
});
