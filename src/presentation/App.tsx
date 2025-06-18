import { Admin, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProviderModule from "ra-data-json-server";
import httpClient from "../infrastructure/httpClient.js";

import authProvider from "../infrastructure/authProvider.js";
import CustomLoginPage from "./components/CustomLoginPage.js";
import MyLayout from "./components/MyLayout.js";

import HomePage from "./pages/HomePage.js";
import DashboardPage from "./pages/DashboardPage.js";
import PostsPage from "./pages/PostsPage.js";

const jsonServerProvider =
  jsonServerProviderModule.default ?? jsonServerProviderModule;

const apiUrl = import.meta.env.VITE_API_URL ||
  "https://jsonplaceholder.typicode.com";
const dataProvider = jsonServerProvider(apiUrl, httpClient);

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
