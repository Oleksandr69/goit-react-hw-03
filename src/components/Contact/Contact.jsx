import css from './Contact.module.css';

export default function Contact({ contact, onDelete}) {
  return (
    <div className={css.item}>
          <p className={css.text}>{contact.name} {contact.number} { contact.id}</p>
      <button className={css.btn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
