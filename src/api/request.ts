import axios from 'axios';
import { Request } from './request.type';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getRequest = async (): Promise<Request[]> => {
  const response = await instance.get<Request[]>('/requests');
  return response.data;
};
