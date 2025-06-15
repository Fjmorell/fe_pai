import { AppBar, Logout, UserMenu } from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';
import RefreshIcon from '@mui/icons-material/Refresh';
import Avatar from '@mui/material/Avatar';
import '../../appbar.css';

const CustomUserMenu = () => {
  const userName = localStorage.getItem('username') || 'Francisco';

  return (
    <UserMenu
      icon={<Avatar src="/icons/avatar.png" sx={{ width: 36, height: 36 }} />}
    >
      <div className="user-info">
        <div className="user-name">{userName}</div>
        <div className="user-role">Key Account Manager</div>
      </div>
      <Logout />
    </UserMenu>
  );
};

const MyAppBar = () => (
  <AppBar className="imeca-appbar" userMenu={<CustomUserMenu />} />
);

export default MyAppBar;
