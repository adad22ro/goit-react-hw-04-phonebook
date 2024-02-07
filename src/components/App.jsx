import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import './css/app.css';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExistingContact = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isExistingContact) {
      alert('This contact already exists!');
    } else {
      const contactWithId = { ...newContact, id: nanoid() };
      setContacts(prevContacts => [...prevContacts, contactWithId]);
    }
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleSearchChange = event => {
    setSearchField(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="app-container">
      <ContactForm addContact={addContact} />
      <SearchBar onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
