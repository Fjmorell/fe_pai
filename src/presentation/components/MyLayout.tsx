import { Layout, LayoutProps } from "react-admin";
import MyAppBar from "./MyAppBar.js";
import MySidebar from "./MySidebar.js";

const MyLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={MyAppBar} sidebar={MySidebar} />
);

export default MyLayout;
