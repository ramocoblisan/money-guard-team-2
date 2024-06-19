import axios from 'axios';

export const walletApi = axios.create({
  baseURL: 'https://wallet.b.goit.study/docs/',
});

export const setToken = token => {
  walletApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeToken = () => {
  walletApi.defaults.headers.common.Authorization = ``;
};
