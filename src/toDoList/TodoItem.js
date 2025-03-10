import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#f9f9f9", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', borderBottom: "1px solid #ddd", marginBottom: '5px' }}>
                    task 1
                </div>
                <div style={{ backgroundColor: "#f9f9f9", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', borderBottom: "1px solid #ddd", marginBottom: '5px' }}>
                    task 2
                </div>
                <div style={{ backgroundColor: "#f9f9f9", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', borderBottom: "1px solid #ddd", marginBottom: '5px' }}>
                    task 3
                </div>
            </div>

        )
    }
}
