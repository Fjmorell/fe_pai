import { AppBar, Logout, UserMenu } from 'react-admin';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
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

// AppBar personalizada sin botón de theme ni refresh
const MyAppBar = (props) => (
  <AppBar
    {...props}
    userMenu={<CustomUserMenu />}
    toolbar={
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', px: 2 }}>
        
        {/* 👇 Aca podrías poner otros elementos si querés */}
      </Box>
    }
  />
);

export default MyAppBar;
