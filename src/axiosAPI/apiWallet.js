import axios from 'axios';

export const walletApi = axios.create({
  baseURL: 'https://wallet.b.goit.study/docs/',
});

export const setToken = token => {
  apiWallet.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  apiWallet.defaults.headers.common.Authorization = ``;
};
