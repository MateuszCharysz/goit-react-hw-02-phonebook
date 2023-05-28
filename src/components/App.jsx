// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import Form from './form/form';
import Input from './input/input';
import Button from './button/button';
import ContactList from './contact-list/contact-list';

export class App extends Component {
  static propTypes = { contacts: Array, name: String };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ], // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    name: '', // kontrola formularza
  };

  changeHandler = () => {};

  submitHandler = () => {};

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          render={
            <>
              <Input
                label="Name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.changeHandler}
              />
              <Button label="Add contact" typeOfBtn="submit" />
            </>
          }
          funcSubmit={this.submitHandler}
        />
        <h2>Contacts</h2>
        <ContactList arr={this.state.contacts} />
      </div>
    );
  }
}

export default App;
