import axios from 'axios';
import { API_BASE_URL, TOKEN_KEY } from '../utils/constants';
import { getToken } from '../utils/helpers';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function registerAccount(formData) {
  const { data } = await api.post('/users', formData);
  return data;
}

export async function signIn(credentials) {
  const { data } = await api.post('/login', credentials);
  return data;
}

export async function fetchAllPosts() {
  const { data } = await api.get('/posts?_sort=createdAt&_order=desc');
  return data;
}

export async function fetchPostById(id) {
  const { data } = await api.get(`/posts/${id}`);
  return data;
}

export async function addPost(payload) {
  const { data } = await api.post('/posts', payload);
  return data;
}

export async function patchPost(id, payload) {
  const { data } = await api.patch(`/posts/${id}`, payload);
  return data;
}

export async function removePost(id) {
  console.log(id, typeof id);
  await api.delete(`/posts/${id}`);
}

export const axiosInstance = api;
export const createUser = registerAccount;
export const loginUser = signIn;
export const createPost = addPost;
export const updatePost = patchPost;
