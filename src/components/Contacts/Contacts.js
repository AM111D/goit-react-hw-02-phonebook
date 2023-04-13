import React from 'react';
import { nanoid } from 'nanoid';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={nanoid()}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
