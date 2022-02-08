import axios from 'axios';
import { Request } from './request.type';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getRequest = async (): Promise<Request[]> => {
  const response = await instance.get<Request[]>('/requests');
  return response.data;
};
