import { Admin, CustomRoutes, Resource } from 'react-admin';
import { Route } from 'react-router-dom';

import authProvider from '../infrastructure/authProvider';
import dataProvider from '../infrastructure/dataProvider';
import CustomLoginPage from './components/CustomLoginPage';
import MyLayout from './components/MyLayout';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

import PurchaseOverview from './pages/dashboards/PurchaseOverview';
import PurchaseSuppliers from './pages/dashboards/PurchaseSuppliers';
import PurchaseGroups from './pages/dashboards/PurchaseGroups';
import PurchaseProducts from './pages/dashboards/PurchaseProducts';

import UserList from './pages/users/UserList';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';

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
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        options={{ label: 'Usuarios' }}
      />

      <CustomRoutes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/purchase/overview" element={<PurchaseOverview />} />
  <Route path="/purchase/suppliers" element={<PurchaseSuppliers />} />
  <Route path="/purchase/groups" element={<PurchaseGroups />} />
  <Route path="/purchase/products" element={<PurchaseProducts />} />

      </CustomRoutes>
    </Admin>
  );
}
