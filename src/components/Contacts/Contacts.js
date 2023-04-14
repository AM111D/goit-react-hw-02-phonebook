import React from 'react';
import { nanoid } from 'nanoid';

const Contacts = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
