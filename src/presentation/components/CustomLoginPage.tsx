import { useLogin, useNotify } from 'react-admin';
import { useState } from 'react';
import '../../login.css'; 

export default function CustomLoginPage() {
  const login = useLogin();
  const notify = useNotify();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
    } catch {
      notify('Login failed', { type: 'error' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay" />
      <h1 className="login-title">Procurement Hub AI</h1>

      <div className="login-box">
        <div className="login-logo">BLINK ›</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username / Email"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <button type="submit" className="login-button">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}
