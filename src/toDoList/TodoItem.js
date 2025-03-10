import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: '8px', marginBottom: '5px' }}>
                    {this.props.taskList.content}
                </div>

            </div>

        )
    }
}
