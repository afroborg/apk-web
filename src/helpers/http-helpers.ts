import { config } from '@/config';
import axios from 'axios';

export const getAsync = <T>(endpoint: string): Promise<T> =>
  new Promise((resolve, reject) => {
    axios
      .get<T>(config.API_URL + endpoint)
      .then((data) => resolve(data.data))
      .catch(reject);
  });
