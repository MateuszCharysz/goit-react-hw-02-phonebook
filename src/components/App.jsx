// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form } from './form/form';
import Input from './input/input';
// import Button from './button/button';
import ContactList from './contact-list/contact-list';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase()),
    );

  isName = (contacts = this.state.contacts) =>
    contacts.name.toLowerCase() === this.filter.toLowerCase();
  submitForm = callback => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: this.idCreate, callback }],
    }));
    callback();
  };
  // submitHandler = e => {
  //   // e.preventDefault();
  //   this.setState(prevState => ({
  //     contacts: [
  //       ...prevState.contacts,
  //       { id: this.idCreate, name: this.state.name, number: this.state.number },
  //     ],
  //   }));
  //   this.formReset();
  // };

  idCreate = nanoid();

  formReset = () => {
    this.setState({ name: '', number: '', filter: '' });
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form handler={this.submitForm} />
        <h2>Contacts</h2>
        <Input
          label="Find contacts by name"
          type="text"
          dataName="filter"
          validation="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Search is not case sensitive"
          funcChange={this.changeHandler}
          stateField={this.state.filter}
        />
        <ContactList arr={this.state.contacts} />
      </div>
    );
  }
}

// App.propTypes ={
//   state: PropTypes.shape(
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string
//       })
//     ),
//     name:
//   )
// }
export default App;
