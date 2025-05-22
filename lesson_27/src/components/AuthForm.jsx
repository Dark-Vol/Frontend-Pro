import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import '../styles/AuthForm.scss';

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) setError('Невірний логін або пароль');
    else navigate('/');
  };

  return (
    <form className="auth-form animated" onSubmit={handleSubmit}>
      <h2>Авторизація</h2>
      <input placeholder="Логін" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error && <div className="error">{error}</div>}
      <button type="submit">Увійти</button>
    </form>
  );
}

export default AuthForm;