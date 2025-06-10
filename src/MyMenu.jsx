import { Menu, MenuItemLink, useSidebarState } from 'react-admin';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import './menu.css';

export default function MyMenu(props) {
  const [open] = useSidebarState();

  return (
    <div className={`custom-menu ${open ? '' : 'collapsed'}`}>
      <div className="menu-header">
        <span className="menu-toggle">BLINK ›</span>
      </div>
      <Menu {...props}>
        <MenuItemLink to="/" primaryText="Home" leftIcon={<HomeIcon />} />
        <MenuItemLink to="/dashboard" primaryText="Dashboard" leftIcon={<DashboardIcon />} />
        <MenuItemLink to="/posts" primaryText="Posts" leftIcon={<ArticleIcon />} />
      </Menu>
    </div>
  );
}
