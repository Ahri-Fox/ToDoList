import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div className="card__add">
                <input name="taskName" id="newTask" type="text" placeholder="Enter an activity..." />
                <button id="addItem" >
                    <i className="fa fa-plus" />
                </button>
            </div>
        )
    }
}
