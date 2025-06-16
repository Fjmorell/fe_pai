import { Admin, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProviderModule from "ra-data-json-server";

import authProvider from "../infrastructure/authProvider.js";
import CustomLoginPage from "./components/CustomLoginPage.js";
import MyLayout from "./components/MyLayout.js";

import HomePage from "./pages/HomePage.js";
import DashboardPage from "./pages/DashboardPage.js";
import PostsPage from "./pages/PostsPage.js";

const jsonServerProvider =
  jsonServerProviderModule.default ?? jsonServerProviderModule;
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

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
