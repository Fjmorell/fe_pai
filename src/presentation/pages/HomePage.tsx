import { useRedirect } from 'react-admin';
import '../../dashboard.css';

export default function HomePage() {
  const redirect = useRedirect();
  const rawAuth = localStorage.getItem('auth');
  let username = localStorage.getItem('username') || 'Invitado';

  try {
    if (rawAuth) {
      const parsed = JSON.parse(rawAuth);
      username = parsed.username || 'Invitado';
    }
  } catch (e) {
    console.error('Error parsing auth from localStorage:', e);
  }

  return (
    <div className="dashboard-container">
      {/* Hero header */}
      <div className="dashboard-hero">
        <h2>
          Bienvenido, <strong>{username}</strong>!
        </h2>
      </div>
    </div>
  );
}
