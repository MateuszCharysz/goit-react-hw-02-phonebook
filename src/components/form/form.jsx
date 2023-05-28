import React from 'react'
import PropTypes from 'prop-types'

const Form = ({render, funcSubmit, funcChange}) => {
  return (
    <form onSubmit={funcSubmit}>{render}</form>
  )
}

Form.propTypes = {
    render: PropTypes.oneOf(
        PropTypes.func,
        PropTypes.element
    ).isRequired,
    funcSubmit: PropTypes.func.isRequired,
    funcChange: PropTypes.func
}

export default Form