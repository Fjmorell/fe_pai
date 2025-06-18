import { fetchUtils } from 'react-admin';

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  const token = localStorage.getItem('token');
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  if (token) {
    (options.headers as Headers).set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export default httpClient;
