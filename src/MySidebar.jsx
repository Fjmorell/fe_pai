import { useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';

export default function MySidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Dashboard', path: '/dashboard', icon: 'dash' },
    { label: 'Posts', path: '/posts', icon: 'posts' },
  ];

  return (
    <div className="imeca-sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">BLINK ›</div>

        <ul className="sidebar-menu">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.path}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <img
                  src={`/icons/${item.icon}-${isActive ? 'amarillo' : 'gris'}.png`}
                  alt={item.label}
                  className="sidebar-icon"
                />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-support">
          <img src="/icons/q&a-gris.png" alt="Q&A" className="sidebar-icon" />
          <span>Q&A</span>
        </div>
        <div className="sidebar-support">
          <img src="/icons/Call-gris.png" alt="Support" className="sidebar-icon" />
          <span>Technical Support</span>
        </div>
      </div>
    </div>
  );
}
