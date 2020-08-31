import React, { Component } from 'react';
import Form from './Form';
import './Main.css';
import TodoList from './TodoList';

export default class Main extends Component {
  state = {
    index: -1,
    newTodo: '',
    todoList: ['React', 'Redux', 'Redux Saga', 'Typescript', 'Spring Cloud']
  }

  componentDidMount() {
    const todoList = JSON.parse(localStorage.getItem('todoList'))
    if (todoList) {
      this.setState({
        todoList
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = this.state.newTodo.trim();

    if (this.state.todoList.includes(newTodo)) return

    let updatedList = [...this.state.todoList, newTodo]

    if (this.state.index < 0) {
      this.setState({
        todoList: updatedList,
        newTodo: ''
      })
    } else {
      updatedList = [...this.state.todoList]
      updatedList[this.state.index] = this.state.newTodo.trim()
      this.setState({
        todoList: [...updatedList],
        newTodo: '',
        index: -1
      })
    }

    localStorage.setItem('todoList', JSON.stringify(updatedList))
  }

  handleDelete = (e, index) => {
    const updatedList = [...this.state.todoList]
    updatedList.splice(index, 1)
    this.setState({
      todoList: updatedList
    })
  }

  handleEdit = (e, index) => {
    this.setState({
      index,
      newTodo: this.state.todoList[index]
    })
  }

  render() {
    const { newTodo, todoList } = this.state

    return (
      <div className="main">
        <h1>Todo list</h1>

        <Form handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTodo={newTodo}
        />

        <TodoList todoList={todoList} />

      </div>
    );
  }
}
