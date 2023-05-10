import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
