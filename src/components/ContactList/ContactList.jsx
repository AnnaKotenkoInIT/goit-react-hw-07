import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import c from './ContactList.module.css';

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <ul className={c.contactList}>
      {filteredData.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
