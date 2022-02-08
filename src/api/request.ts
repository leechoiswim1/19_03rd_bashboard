import axios, { AxiosResponse } from 'axios';
import { Request } from './request.type';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getRequest = async () => {
  const response = await instance.get<unknown, AxiosResponse<Request[]>, unknown>('/requests');

  return response.data;
};
