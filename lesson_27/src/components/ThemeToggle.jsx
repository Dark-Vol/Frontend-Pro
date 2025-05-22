import { useContext } from 'react';
import { ThemeContext } from '../App';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}

export default ThemeToggle;