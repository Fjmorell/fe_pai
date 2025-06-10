import { useRedirect, List, Datagrid, TextField, TopToolbar, ExportButton } from 'react-admin';
import '../dashboard.css';

const ListActions = () => (
  <TopToolbar>
    <ExportButton />
  </TopToolbar>
);

export default function PostsPage() {
  const redirect = useRedirect();

  return (
    <div className="dashboard-container">
      {/* Hero header */}
      <div className="dashboard-hero" style={{ backgroundImage: `url('/Banner-dashboard.png')` }}>

        <h2>Posts</h2>
        <p>Incluir título</p>

        <div className="dashboard-buttons">
          <button className="dashboard-btn" onClick={() => redirect('/')}>
            <img src="/icons/home-blanco.png" alt="Home" className="icon-img" />
            <span>Home</span>
          </button>
          <button className="dashboard-btn" onClick={() => redirect('/dashboard')}>
            <img src="/icons/dash-blanco.png" alt="Dashboard" className="icon-img" />
            <span>Dashboard</span>
          </button>
          <button className="dashboard-btn active">
            <img src="/icons/posts-blanco.png" alt="Posts" className="icon-img" />
            <span>Posts</span>
          </button>
        </div>
      </div>

      {/* Tabla de posts */}
      <List
        resource="posts"
        actions={<ListActions />}
        pagination={false}
        title={false}
      >
        <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="body" />
        </Datagrid>
      </List>
    </div>
  );
}
