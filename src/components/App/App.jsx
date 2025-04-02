import React, { useState } from 'react'

import './App.css'

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import cardList from '../cardList.json'

const App = () => {
  
  // const [counter, setCounter] = useState(() => {
  //   const savedClicks = window.localStorage.getItem("saved-clicks");
  //   // console.log(savedClicks);
  //     if (savedClicks !== null) {
  //       return JSON.parse(savedClicks);
  //     } else {
  //       return { good: 0, neutral: 0, bad: 0 };
  //     }
  //   }
  // );

  // const totalFeedback = (counter.good + counter.neutral + counter.bad);
  // const positiveFeedback = Math.round((counter.good / totalFeedback) * 100);
  
  // const updateFeedback = (feedbackType) => {
  //   if (feedbackType == 'reset') {
  //     setCounter({ good: 0, neutral: 0, bad: 0 });
  //   } else {
  //     setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
  //   }
  // }

  // useEffect(() => {
  //   // console.log({...counter});
  //   window.localStorage.setItem("saved-clicks", JSON.stringify({...counter}));
  // }, [counter]);
  
  const [cards, setCards] = useState(cardList);

  const addContact = (newContact) => {
    console.log(newContact);
   
    setCards((prevCards) => {
      return [...prevCards, newContact];
    })
  };
  
  const deleteContact = (contactId) => { 
    setCards((prevCards) => {
      return prevCards.filter((card) => card.id !== contactId);
    })
  };

    return (
    <div>
        <ContactForm
         
          onAdd={addContact}
        />
      <SearchBox
        />
        <ContactList
          cardList={cards}
          onDelete={deleteContact}
        />
      
    </div>
  );
};

export default App
