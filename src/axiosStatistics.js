import axios from 'axios';

const axiosStatistics = axios.create({
  baseURL: 'https://wallet.b.goit.study/api',
});

// Adaugă un interceptor pentru a include token-ul în header
axiosStatistics.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Sau de unde stochezi token-ul
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosStatistics;