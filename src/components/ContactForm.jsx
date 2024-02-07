import React, { useState } from 'react';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      // Permite doar litere, apostrof, liniuță și spații
      if (/^[a-zA-Z' -]*$/.test(value)) {
        setName(value);
      }
    } else if (name === 'number') {
      // Permite doar numere
      if (!value || /^\d+$/.test(value)) {
        setNumber(value);
      }
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        name="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Number"
        type="tel"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}
