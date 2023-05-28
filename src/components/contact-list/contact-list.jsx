import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ arr }) => {
  return (
    <ul>
      {arr.map(({ id, name, number }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  arr: PropTypes.arrayOf([{
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }]),
};

export default ContactList;
