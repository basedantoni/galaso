import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.STRAPI_BASE,
  headers: {
    "Content-Type": 'application/json',
  },
});

export async function getShows() {
  const res = await apiClient.get('/shows');
  return res.data;
}
