import React, { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
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
