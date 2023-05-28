import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './Form.module.css';
import Input from 'components/input/input';
import Button from 'components/button/button';
import { nanoid } from 'nanoid';

// const Form = ({ render, funcSubmit }) => {
//   return <form onSubmit={funcSubmit} className={css.form}>{render}</form>;
// };

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  // funcSubmit = (handler) => {
  //   callback();
  // };
  submitHandler = e => {
    e.preventDefault();
    return this.state;
    // this.formReset();
  };
  formReset = () => {
    this.setState({ name: '', number: '' });
  };
  idCreate = nanoid();
  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form
        onSubmit={() => this.props.handler(this.submitHandler)}
        className={css.form}
      >
        <Input
          label="Name"
          type="text"
          dataName="name"
          validation="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          funcChange={this.changeHandler}
          stateField={this.state.name}
        />
        <Input
          label="Number"
          type="tel"
          dataName="number"
          validation="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          funcChange={this.changeHandler}
          stateField={this.state.number}
        />
        <Button label="Add contact" typeOfBtn="submit" />
      </form>
    );
  }
}

export default Form;

// Form.propTypes = {
//   render: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
//   funcSubmit: PropTypes.func.isRequired,
// };
