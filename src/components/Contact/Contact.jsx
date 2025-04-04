import css from './Contact.module.css';
import { FaUser, FaPhone } from "react-icons/fa";

export default function Contact({ contact, onDelete}) {
  return (
    <div className={css.item}>
      <div>
        <p className={css.text}><FaUser/>     {contact.name} </p>
        <p className={css.text}><FaPhone/>     {contact.number} </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
