import React, { Component } from 'react'
import './Todolist.css'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'


export default class TodoList extends Component {

    state = {
        taskList: [
            { id: 1, content: 'task 1', completed: false },
            { id: 2, content: 'task 2', completed: true },
            { id: 3, content: 'task 3', completed: false },
            { id: 4, content: 'task 4', completed: true },
        ],
        newTask: '',
        completed: false
    }

    renderTaskToDo = () => {
        return this.state.taskList.filter(item => !item.completed).map((item, index) => {
            return <li key={index}>
                <TodoItem key={item.id} taskList={item} />
                <div className="buttons">
                    <button className="remove" type="button" >
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" >
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    renderTaskToDoDone = () => {
        return this.state.taskList.filter(item => item.completed).map((item, index) => {
            return <li key={index}>
                <TodoItem key={item.id} taskList={item} />
                <div className="buttons">
                    <button className="remove" type="button" >
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" >
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }


    render() {
        return (
            <form >
                <div className="card">
                    <div className="card__header">
                    </div>
                    <div className="card__body">
                        <div className="card__content">
                            <div className="form-group">
                                <div className="card__title">
                                    <h2>Todo App</h2>
                                </div>
                                <AddTodo />
                                {/* <span className="text text-danger">{this.state.errors.taskName}</span> */}
                            </div>

                            <div className="card__todo form-group">
                                {/* Uncompleted tasks */}
                                <ul className="todo" id="todo">
                                    {this.renderTaskToDo()}
                                </ul>
                                {/* Completed tasks */}
                                <ul className="todo" id="completed">
                                    {this.renderTaskToDoDone()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
