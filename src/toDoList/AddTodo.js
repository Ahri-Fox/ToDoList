import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form style={{ display: 'flex', marginBottom: '10px' }}>
                <input style={{ flex: 1, border: "1px solid #ccc", marginRight: "5px", padding: "8px" }} type="text" placeholder="Add your new todo" />
                <button type='submit' style={{ backgroundColor: "violet", cursor: "pointer", borderRadius: "4px", padding: "8px 12px" }}> + </button>
            </form>
        )
    }
}
