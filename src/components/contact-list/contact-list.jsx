import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ arr }) => {
  return (
    <ul>
      {arr.map(({ id, name, number }) => (
        <li key={id}>{`${name} ${number}`}</li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
};

export default ContactList;
