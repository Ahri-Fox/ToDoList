import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

    render() {
        return (
            <div>
                <AddTodo />
                <TodoItem />
            </div>
        )
    }
}
