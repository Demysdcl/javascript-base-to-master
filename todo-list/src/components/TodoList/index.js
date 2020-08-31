import PropTypes from 'prop-types';
import React from 'react';
import { FaEdit, FaWindowClose } from "react-icons/fa";
import './TodoList.css';

export default function TodoList({todoList, handleDelete, handleEdit}) {
  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li key={`todo-${idx}`}>
          {todo}
          <div>
            <FaEdit onClick={(e) => handleEdit(e, idx)} />
            <FaWindowClose onClick={e => handleDelete(e, idx)}
              className="delete" />
          </div>
        </li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todoList: PropTypes.array.isRequired
}
