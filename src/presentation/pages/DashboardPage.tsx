import { useRedirect } from 'react-admin';
import '../../dashboard.css';

export default function Dashboard() {
  const username = localStorage.getItem('auth') || 'Francisco';
  const redirect = useRedirect();

  return (
    <div className="dashboard-container">
<div className="dashboard-hero" style={{ backgroundImage: `url('/Banner-dashboard.png')` }}>
        <h2>
          Dashboard
        </h2>
        <p>Estado actual de tus operaciones</p>

        <div className="dashboard-buttons">
          <button className="dashboard-btn" onClick={() => redirect('/')}>
            <img src="/icons/home-blanco.png" alt="Home" className="icon-img" />
            <span>Home</span>
          </button>
          <button className="dashboard-btn active">
            <img src="/icons/dash-blanco.png" alt="Dashboard" className="icon-img" />
            <span>Dashboard</span>
          </button>
          <button className="dashboard-btn" onClick={() => redirect('/posts')}>
            <img src="/icons/posts-blanco.png" alt="Posts" className="icon-img" />
            <span>Posts</span>
          </button>
        </div>
      </div>

      {/* Cards de métricas */}
      <div className="dashboard-cards">
        <div className="card">
          <img src="/icons/ordenes-blanco.png" alt="Órdenes" className="icon-img mb-2" />
          <p className="card-title">Órdenes</p>
          <p className="card-value">123</p>
        </div>
        <div className="card">
          <img src="/icons/ingresos-blanco.png" alt="Ingresos" className="icon-img mb-2" />
          <p className="card-title">Ingresos</p>
          <p className="card-value">$45.000</p>
        </div>
        <div className="card">
          <img src="/icons/IA-blanco.png" alt="Recomendaciones IA" className="icon-img mb-2" />
          <p className="card-title">Recomendaciones IA</p>
          <p className="card-value">8 sugerencias</p>
        </div>
      </div>
    </div>
  );
}
