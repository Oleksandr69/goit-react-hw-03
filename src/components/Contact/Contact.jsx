import css from './Contact.module.css';

export default function Contact({ contact, onDelete}) {
  return (
    <div className={css.item}>
      <div>
        <p className={css.text}>{contact.name} </p>
        <p className={css.text}>{contact.number} </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
