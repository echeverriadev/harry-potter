import { HarryPotterAPIResponse } from '@/interfaces/harry-poter-api-response.interface';
import { api } from '../services/harry-potter.api';

export const getCharacters = async () => {
  try {
    const result = await api.get('/characters');
    return result.data as HarryPotterAPIResponse;
  } catch (error) {
    return error;
  }
};
