import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  headers: {
    "Content-Type": 'application/json',
    Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
  },
});

export async function getShows(params) {
  const res = await apiClient.post('/', params);
  return res.data;
}

export async function getMusic(params) {
  const res = await apiClient.post('/', params);
  return res.data;
}

export async function getSpotlight(params) {
  const res = await apiClient.post('/', params);
  return res.data;
}
