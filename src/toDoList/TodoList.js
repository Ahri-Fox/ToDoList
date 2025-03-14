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
        searchKeyword: '',
        editId: null,
        editContent: '',

    }

    handleAdd = (content) => {
        if (!content.trim()) return

        const isDuplicate = this.state.taskList.some(task =>
            task.content.toLowerCase() === content.toLowerCase()
        );

        if (isDuplicate) {
            alert("Task content already exists! Please enter a different task.");
            return;
        }


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

    handleSearch = (event) => {
        this.setState({ searchKeyword: event.target.value })
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

    startEditTask = (id, content) => {
        this.setState({ editId: id, editContent: content })
    }

    handleEditChange = (event) => {
        this.setState({ editContent: event.target.value })
    }

    saveEditTask = (id, event) => {
        if (event) event.preventDefault();


        if (!this.state.editContent.trim()) {
            alert("Task content cannot be empty!");
            return;
        }

        const isDuplicate = this.state.taskList.some(task =>
            task.id !== id && task.content.toLowerCase() === this.state.editContent.toLowerCase()
        );

        if (isDuplicate) {
            alert("Task content already exists! Please enter a different task.");
            return;
        }

        this.setState({
            taskList: this.state.taskList.map(item => item.id === id ? { ...item, content: this.state.editContent } : item),
            editId: null,
            editContent: '',
        });
    };

    cancelEdit = () => {
        this.setState({ editId: null, editContent: '' });
    };

    renderTaskToDo = () => {
        return this.state.taskList.filter(item => item.content && !item.completed && item.content.toLowerCase().includes(this.state.searchKeyword.toLowerCase())).map((item, index) => {
            return <li key={index}>
                {this.state.editId === item.id ? (
                    <>
                        <div style={{ width: '80%' }}>
                            <input className='text__edit' type="text" value={this.state.editContent} onChange={this.handleEditChange} />
                        </div>
                        <div className='buttons'>
                            <button type='button' onClick={(event) => this.saveEditTask(item.id, event)} className="save">
                                <i className="fa fa-save"></i>
                            </button>
                            <button onClick={this.cancelEdit} className="cancel">
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <TodoItem key={item.id} taskList={item} />
                        <div className="buttons">
                            <button onClick={() => this.startEditTask(item.id, item.content)} className="edit">
                                <i className="fa fa-edit"></i>
                            </button>
                            <button onClick={() => this.deleteTask(item.id)} className="remove">
                                <i className="fa fa-trash-alt"></i>
                            </button>
                            <button onClick={() => this.doneTask(item.id)} className="complete">
                                <i className="far fa-check-circle"></i>
                            </button>
                        </div>
                    </>
                )}
            </li>
        })
    }

    renderTaskToDoDone = () => {
        return this.state.taskList.filter(item => item.content && item.completed && item.content.toLowerCase().includes(this.state.searchKeyword.toLowerCase())).map((item, index) => {
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
            <div>
                <form onSubmit={(e) => e.preventDefault()} >
                    <div className="card">
                        <div className="card__body">
                            <div className="card__content">
                                <div className="form-group">
                                    <div className="card__title">
                                        <h1>Todo App</h1>
                                    </div>
                                    <input className='input__search' type='text' placeholder='Search' value={this.state.searchKeyword} onChange={this.handleSearch} />
                                    <AddTodo newTask={this.state.newTask} onAdd={this.handleAdd} />

                                </div>

                                <div className="card__todo form-group">
                                    <h5 className='text__title' >Tasks To Do</h5>
                                    <div className='todo-container'>
                                        <ul className="todo" id="todo">
                                            {this.renderTaskToDo()}
                                        </ul>
                                    </div>
                                    <h5 className='text__title' >Completed Tasks</h5>
                                    <div className='todo-container'>
                                        <ul className="todo" id="completed">
                                            {this.renderTaskToDoDone()}
                                        </ul>
                                    </div>
                                    <ul className="todo sum" id="todo"  >
                                        YOU HAVE {this.state.taskList.length} TASKS
                                        <div>
                                            <button onClick={() => { this.clearAllTasks() }} type='button' className=' btn btn-danger '>
                                                Clear all
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div>
        )
    }
}
