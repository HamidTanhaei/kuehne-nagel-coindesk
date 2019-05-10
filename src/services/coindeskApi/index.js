import axios from 'axios';
import {routes} from './routes';

export const historicalApi = (code) => {
  return axios({
    method: 'get',
    url: routes.historical,
    params: {
      currency: code
    }
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
