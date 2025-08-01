import { useNavigate } from 'react-router-dom';
import { useRedirect } from 'react-admin';



export default function PurchaseGroups() {
    const redirect = useRedirect();
  const navigate = useNavigate();

  return (
     <div className="dashboard-container">
<div className="dashboard-hero" style={{ backgroundImage: `url('/Banner-dashboard.png')` }}>
        <h2>
          Groups
        </h2>

        
      

      {/* Cards de métricas */}
      <div className="dashboard-buttons">
          <button className="dashboard-btn" onClick={() => redirect('/')}>
            <img src="/icons/home-blanco.png" alt="Home" className="icon-img" />
            <span>Home</span>
          </button>
          <button className="dashboard-btn active">
            <img src="/icons/dash-blanco.png" alt="Dashboard" className="icon-img" />
            <span>Groups</span>
          </button>
          <button className="dashboard-btn" onClick={() => redirect('/purchase/overview')}>
            <img src="/icons/dash-blanco.png" alt="Posts" className="icon-img" />
            <span>Overview</span>
          </button>
          <button className="dashboard-btn" onClick={() => redirect('/purchase/products')}>
            <img src="/icons/dash-blanco.png" alt="Posts" className="icon-img" />
            <span>Products</span>
          </button>
          <button className="dashboard-btn" onClick={() => redirect('/purchase/suppliers')}>
            <img src="/icons/dash-blanco.png" alt="Posts" className="icon-img" />
            <span>Suppliers</span>
          </button>
        </div>
    </div>

{/* Contenedor centrado */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 0',
        }}
      >
        <img
          src="/groups.jpeg" // Asegurate de haberlo movido a /public/images/
          alt="Groups Dashboard"
          style={{
            maxWidth: '50%',
            maxHeight: '80vh',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        />
      </div>
    </div>
  );
}
