import axios, { AxiosRequestConfig } from 'axios';

import { getLocalStorageItem, getRefreshToken } from '../common/helper/storage';
import ClientMessages from '../common/constants/messages';

import ServiceTypes from './types';

enum TokenPrefix {
  BEARER = 'Bearer',
}

//NOTE: This is for testing purpose
export const AxiosClient = axios.create({
  baseURL: ServiceTypes.BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

//NOTE: This for client with accessToken
export const AxiosClientAPI = axios.create({
  baseURL: ServiceTypes.BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClientAPI.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    request.timeoutErrorMessage = ClientMessages.ClientTimeOut;
    request.headers = {
      Authorization: getLocalStorageItem('token') as string,
    };
    return request;
  },
  (exception) => {
    return exception;
  },
);

//NOTE: This for client with refreshToken
export const AxiosClientRequestAccessTokenAPI = axios.create({
  baseURL: ServiceTypes.BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClientRequestAccessTokenAPI.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    request.headers = {
      Authorization: TokenPrefix.BEARER + ' ' + getRefreshToken(),
    };
    return request;
  },
  (exception) => {
    return exception;
  },
);

//NOTE: Direct API
export const AxiosDirectAPI = axios.create({
  baseURL: ServiceTypes.BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosDirectAPI.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    request.timeoutErrorMessage = ClientMessages.ClientTimeOut;
    request.headers = {
      'web-engine-directly': true,
    };
    return request;
  },
  (exception) => {
    return exception;
  },
);
