import { useRedirect } from 'react-admin';
import '../../dashboard.css';

export default function Dashboard() {
  const username = localStorage.getItem('username') || 'Francisco';
  const redirect = useRedirect();

  return (
    <div className="dashboard-container">
<div className="dashboard-hero" style={{ backgroundImage: `url('/Banner-dashboard.png')` }}>
        <h2>
          Dashboard
        </h2>
        <p>Estado actual de tus operaciones</p>

        
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
          <p className="card-title">Recomendaciones AI</p>
          <p className="card-value">8 sugerencias</p>
        </div>
      </div>
    </div>
  );
}
