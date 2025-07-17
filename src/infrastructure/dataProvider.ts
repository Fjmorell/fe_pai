import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const API_URL = 'http://localhost:3000/api'; // Asegurate de que coincida con el backend

const httpClient = (url: string, options: any = {}) => {
  const token = localStorage.getItem('auth_token');

  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(API_URL, httpClient);

export default dataProvider;
