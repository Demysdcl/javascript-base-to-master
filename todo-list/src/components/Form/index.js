import PropTypes from 'prop-types'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import './Form.css'

export default function Form({ handleSubmit, handleChange, newTodo }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text"
        value={newTodo} />
      <button type="submit" >
        <FaPlus />
      </button>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTodo: PropTypes.string.isRequired
}
