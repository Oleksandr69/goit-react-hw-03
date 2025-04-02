import css from './ContactList.module.css'
import Contact from '../Contact/Contact';

const ContactList = ({ cardList, onDelete }) => {
   
    return <ul className={css.list}>
        {cardList.map((card) => {
            return (<li key={card.id} className={css.cardItem}>
                <Contact
                    contact={card}
                    onDelete={onDelete}
                />
            </li>);
        })}
    </ul>;
};

export default ContactList;