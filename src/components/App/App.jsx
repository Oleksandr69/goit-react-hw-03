import React, { useState, useEffect } from 'react'

import './App.css'

import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import cardList from '../cardList.json'

const App = () => {

  const [cards, setCards] = useState(() => {
    const savedCards = window.localStorage.getItem("saved-cardList");
    // console.log(JSON.parse(savedCards));
    if (savedCards !== null) {
      return JSON.parse(savedCards);
      } else {
        return cardList;
      }
  });

  const [search, setSearch] = useState('');

  const filteredList = cards.filter((card) => 
      card.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
  window.localStorage.setItem("saved-cardList", JSON.stringify(filteredList));
  }, [filteredList]);

  const addContact = (newContact) => {
    // console.log(newContact);
   
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
          value={search}
          onSearch={setSearch}
        />
        <ContactList
          cardList={filteredList}
          onDelete={deleteContact}
        />
      
    </div>
  );
};

export default App
