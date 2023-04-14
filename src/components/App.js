import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSumbitHandler = data => {
    const newContact = Object.assign({}, data, { id: nanoid() });
    const updatedContacts = [...this.state.contacts, newContact];
    this.setState({ contacts: updatedContacts }, () => {
      console.log(this.state.contacts);
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSumbitHandler} />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
