import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

    render() {
        return (
            <div className="todo-list" style={{ width: '20%', margin: 'auto', marginTop: '100px' }}>
                <h3>Todo App</h3>
                <AddTodo />
                <TodoItem />
            </div>
        )
    }
}
