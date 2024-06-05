import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export async function fetchCampersData() {
  const response = await instance.get('/adverts');
  return response.data;
}
