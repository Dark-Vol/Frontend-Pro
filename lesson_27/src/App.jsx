import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactsTable from './components/ContactsTable';
import AddContactForm from './components/AddContactForm';
import AuthForm from './components/AuthForm';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import './styles/App.scss';

export const ThemeContext = createContext();
export const LanguageContext = createContext();
export const AuthContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'ua');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(user => ({
          id: user.id,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ').slice(1).join(' '),
          phone: user.phone
        }));
        setContacts(formatted);
      });
  }, []);

  const addContact = (contact) => {
    setContacts(prev => [...prev, { ...contact, id: Date.now() }]);
  };

  const updateContact = (updated) => {
    setContacts(prev => prev.map(c => c.id === updated.id ? updated : c));
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  const startEditing = (contact) => {
    setEditingContact(contact);
  };

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <AuthContext.Provider value={{ isAuthenticated, login }}>
          <div className={`app ${theme}`}>
            <Router>
              <div className="toolbar">
                <ThemeToggle />
                <LanguageToggle />
                {isAuthenticated && <button onClick={logout} className="btn btn-gray">🚪 Вийти</button>}
              </div>
              <Routes>
                <Route path="/login" element={<AuthForm />} />
                {isAuthenticated ? (
                  <>
                    <Route path="/" element={<ContactsTable contacts={contacts} onDelete={deleteContact} onEdit={startEditing} />} />
                    <Route path="/add" element={<AddContactForm onSave={addContact} onCancel={() => {}} contact={null} />} />
                    <Route path="/edit" element={<AddContactForm onSave={updateContact} onCancel={() => {}} contact={editingContact} />} />
                  </>
                ) : (
                  <Route path="*" element={<Navigate to="/login" replace />} />
                )}
              </Routes>
            </Router>
          </div>
        </AuthContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
