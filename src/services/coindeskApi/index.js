import axios from 'axios';
import {routes} from './routes';

export const currentPriceApi = () => {
  return axios({
    method: 'get',
    url: routes.currentPrice,
  });
};

export const supportedCurrenciesApi = () => {
  return axios({
    method: 'get',
    url: routes.supportedCurrencies,
  });
};

export const currentPriceCodeApi = (code) => {
  return axios({
    method: 'get',
    url: routes.currentPriceCode(code),
    data: {
      code
    }
  });
};
