import { useLocation, useNavigate } from 'react-router-dom';
import { useSidebarState } from 'react-admin';
import '../../sidebar.css';

export default function MySidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open] = useSidebarState(); // 👈 obtiene estado del sidebar

  const menuItems = [
    { label: 'Home', path: '/', icon: 'dash' },
    { label: 'Groups', path: '/purchase/groups', icon: 'dash' },
    { label: 'Overview', path: '/purchase/overview', icon: 'dash' },
    { label: 'Poducts', path: '/purchase/products', icon: 'dash' },
    { label: 'Suppliers', path: '/purchase/suppliers', icon: 'dash' },
  ];

  return (
    <div className={`imeca-sidebar ${open ? 'open' : 'closed'}`}>
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
                  src={`/icons/${item.icon}-${isActive ? 'blanco' : 'gris'}.png`}

                  alt={item.label}
                  className="sidebar-icon"
                />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
