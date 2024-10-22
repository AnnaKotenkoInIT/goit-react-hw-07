import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import c from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={c.contactItem}>
      <div className={c.contactCard}>
        <p className={c.contactTitle}>
          <FaUser className={c.contactIcon} />
          {contact.name}
        </p>
        <p className={c.contactTitle}>
          <FaPhoneAlt className={c.contactIcon} />
          {contact.number}
        </p>
      </div>
      <button
        className={c.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
