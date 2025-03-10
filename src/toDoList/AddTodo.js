import React, { Component } from 'react'

export default class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = { taskName: "" };
    }

    handleChange = (event) => {
        this.setState({ taskName: event.target.value });

    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.taskName.trim() === "") return;

        this.props.onAdd(this.state.taskName);
        this.setState({ taskName: "" });
    };

    render() {
        return (
            <div className="card__add">
                <input name="taskName" value={this.state.taskName} onChange={this.handleChange} id="newTask" type="text" placeholder="Add your new todo" />
                <button onClick={this.handleSubmit} id="addItem" >
                    <i className="fa fa-plus" />
                </button>
            </div>
        )
    }
}
