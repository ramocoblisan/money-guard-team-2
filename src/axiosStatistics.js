import axios from 'axios';

const axiosStatistics = axios.create({
  baseURL: 'https://moneyguardbackend.onrender.com/',
});

export default axiosStatistics;