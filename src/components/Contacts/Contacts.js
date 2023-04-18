import React from 'react';
import { nanoid } from 'nanoid';
import css from './contacts.module.css'

const Contacts = ({ contacts, filter, ondeletContact }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={nanoid()} id={nanoid()} className={css.contactsItem}>
            {contact.name}: {contact.number}
            <button onClick={() => ondeletContact(contact.id)} className={css.deletBtn}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
