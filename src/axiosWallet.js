import axios from 'axios';

const axiosWallet = axios.create({
  baseURL: 'https://wallet.b.goit.study/api',
});

export default axiosWallet;