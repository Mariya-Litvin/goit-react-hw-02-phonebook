import { ButtonDelete, ListContactText } from './ContactListItem.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onButtonDelete }) => {
  return (
    <>
      <ListContactText>
        {contact.name}: {contact.number}
      </ListContactText>
      <ButtonDelete type="button" onClick={() => onButtonDelete(contact.id)}>
        Delete
      </ButtonDelete>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onButtonDelete: PropTypes.func.isRequired,
};
