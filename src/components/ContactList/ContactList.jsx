export const ContactList = ({ contacts, onClickDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => onClickDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
