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

export async function getMusic() {
  const res = await apiClient.get('/musics?populate=*');
  return res.data;
}

export async function getSpotlight() {
  const res = await apiClient.get('/spotlights?populate=*');
  return res.data;
}
