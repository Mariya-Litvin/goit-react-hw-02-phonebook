import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { ListContactItem, ListContacts } from './ContactList.styled';
export const ContactList = ({ contacts, onClickDelete }) => {
  return (
    <ListContacts>
      {contacts.map(contact => (
        <ListContactItem key={contact.id}>
          <ContactListItem contact={contact} onButtonDelete={onClickDelete} />
        </ListContactItem>
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
