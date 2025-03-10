import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#f9f9f9", display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: '8px', borderBottom: "1px solid #ddd", marginBottom: '5px' }}>
                    {this.props.taskList.content}
                </div>

            </div>

        )
    }
}
