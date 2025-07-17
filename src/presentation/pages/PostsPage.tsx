import { useRedirect, List, Datagrid, TextField, TopToolbar, ExportButton } from 'react-admin';
import '../../dashboard.css';

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
