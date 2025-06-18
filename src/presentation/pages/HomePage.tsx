import { useRedirect } from 'react-admin';
import '../../dashboard.css';

export default function HomePage() {
  const username = localStorage.getItem('username') || 'Francisco';
  const redirect = useRedirect();

  return (
    <div className="dashboard-container">
      {/* Hero header */}
      <div className="dashboard-hero">
        <h2>
          Bienvenido, <strong>{username}</strong>!
        </h2>

        <div className="dashboard-buttons">
          <button className="dashboard-btn active">
            <img src="/icons/home-blanco.png" alt="Home" className="icon-img" />
            <span>Home</span>
          </button>
          <button className="dashboard-btn" onClick={() => redirect('/dashboard')}>
            <img src="/icons/dash-blanco.png" alt="Dashboard" className="icon-img" />
            <span>Dashboard</span>
          </button>
            <button className="dashboard-btn" onClick={() => redirect('/posts')}>
            <img src="/icons/posts-blanco.png" alt="Posts" className="icon-img" />
            <span>Posts</span>
          </button>
        </div>
      </div>
    </div>
  );
}
