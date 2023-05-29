import React from 'react'
import PropTypes from 'prop-types'
import css from './Button.module.css'

const Button = ({label, typeOfBtn, id, btnFunc}) => {
  return (
    <button className={css.btn} type={typeOfBtn} listdata={id} onClick={btnFunc}>{label}</button>
  )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    typeOfBtn: PropTypes.string.isRequired,
    id: PropTypes.string,
    btnFunc: PropTypes.func
}

export default Button