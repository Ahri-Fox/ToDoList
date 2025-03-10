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

    handleAdd = (content) => {
        const newTask = {
            id: Date.now(),
            content,
            completed: false
        }
        this.setState({
            taskList: [...this.state.taskList, newTask],
            newTask: ''
        })
    }

    doneTask = (id) => {
        this.setState({
            taskList: this.state.taskList.map(item => item.id === id ? { ...item, completed: true } : item)
        });
    };

    undoTask = (id) => {
        this.setState({
            taskList: this.state.taskList.map(item => item.id === id ? { ...item, completed: false } : item)
        });
    }
    deleteTask = (id) => {
        this.setState({
            taskList: this.state.taskList.filter(item => item.id !== id)
        });
    }
    clearAllTasks = () => {
        this.setState({
            taskList: []
        });
    }

    renderTaskToDo = () => {
        return this.state.taskList.filter(item => !item.completed).map((item, index) => {
            return <li key={index}>
                <TodoItem key={item.id} taskList={item} />
                <div className="buttons">
                    <button onClick={() => {
                        this.deleteTask(item.id)
                    }} className="remove" type="button" >
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button onClick={() => {
                        this.doneTask(item.id)
                    }} type="button" className="complete" >
                        <i className="far fa-check-circle" />
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
                    <button onClick={() => {
                        this.deleteTask(item.id)
                    }} className="remove" type="button" >
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button onClick={() => {
                        this.undoTask(item.id)
                    }} type="button" className="complete" >
                        <i class="fa fa-undo-alt"></i>
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
                                <AddTodo newTask={this.state.newTask} onAdd={this.handleAdd} />
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

                                <ul className="todo d-flex justify-content-center" id="todo"  >
                                    YOU HAVE {this.state.taskList.length} TASKS
                                    <div>
                                        <button onClick={() => { this.clearAllTasks() }} type='button' className=' btn btn-danger p-1 ml-1'>
                                            Clear all
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
}
