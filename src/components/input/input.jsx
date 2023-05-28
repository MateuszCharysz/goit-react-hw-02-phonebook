import React from 'react'
import PropTypes from 'prop-types'

const Input = ({label, type, name, validation, title, func }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        pattern={validation}
        title={title}
        required
        onChange={func}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validation: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
};

export default Input