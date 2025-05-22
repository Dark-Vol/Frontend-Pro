import '../styles/ContactsTable.scss';

function ContactsTable({ contacts, onDelete, onEdit }) {
  return (
    <table className="contacts-table">
      <thead>
        <tr>
          <th>Ім’я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => onDelete(contact.id)} className="btn btn-red">Видалити</button>
              <button onClick={() => onEdit(contact)} className="btn btn-yellow">Редагувати</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactsTable;