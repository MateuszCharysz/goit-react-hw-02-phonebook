import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'

const Form = ({ render, funcSubmit }) => {
  return <form onSubmit={funcSubmit} className={css.form}>{render}</form>;
};

Form.propTypes = {
  render: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  funcSubmit: PropTypes.func.isRequired,
};

export default Form;
