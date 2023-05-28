import React from 'react'
import PropTypes from 'prop-types'
import css from './Button.module.css'

const Button = ({label, typeOfBtn}) => {
  return (
    <button className={css.btn} type={typeOfBtn}>{label}</button>
  )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    typeof: PropTypes.string.isRequired
}

export default Button