import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    newTodo: ''
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  render() {
    const {newTodo} = this.state

    return (
      <div className="main">
        <h1>Todo list</h1>

        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" value={newTodo}/>
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
