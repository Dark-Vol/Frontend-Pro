import { useState, useEffect } from 'react';
import '../styles/AddContactForm.scss';

function AddContactForm({ onSave, onCancel, contact }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setPhone(contact.phone);
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contact?.id || Date.now(),
      firstName,
      lastName,
      phone,
    };
    onSave(newContact);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label>Ім’я</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Прізвище</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Телефон</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-green">Зберегти</button>
        <button type="button" onClick={onCancel} className="btn btn-gray">Відміна</button>
      </div>
    </form>
  );
}

export default AddContactForm;