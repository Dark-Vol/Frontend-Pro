import { useState, useEffect } from 'react';
import ContactsTable from './components/ContactsTable';
import AddContactForm from './components/AddContactForm';
import './styles/App.scss';

function App() {
  const [route, setRoute] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

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
    setRoute('contacts');
  };

  const updateContact = (updated) => {
    setContacts(prev => prev.map(c => c.id === updated.id ? updated : c));
    setEditingContact(null);
    setRoute('contacts');
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  const startEditing = (contact) => {
    setEditingContact(contact);
    setRoute('add');
  };

  return (
    <div className="app">
      <div className="nav">
        <button onClick={() => { setRoute('contacts'); setEditingContact(null); }} className="btn btn-blue">Контакти</button>
        <button onClick={() => { setRoute('add'); setEditingContact(null); }} className="btn btn-green">Додати контакт</button>
      </div>
      {route === 'contacts' && <ContactsTable contacts={contacts} onDelete={deleteContact} onEdit={startEditing} />}
      {route === 'add' && <AddContactForm onSave={editingContact ? updateContact : addContact} onCancel={() => setRoute('contacts')} contact={editingContact} />}
    </div>
  );
}

export default App;