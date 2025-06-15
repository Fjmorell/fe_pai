import { Admin, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import jsonServerProvider from 'ra-data-json-server';

import authProvider from '../infrastructure/authProvider';
import CustomLoginPage from './components/CustomLoginPage';
import MyLayout from './components/MyLayout';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={CustomLoginPage}
      layout={MyLayout}
      dashboard={HomePage}
      requireAuth
    >
      <CustomRoutes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </CustomRoutes>
    </Admin>
  );
}
