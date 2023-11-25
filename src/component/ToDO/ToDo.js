import React, { Component } from 'react';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            task: '',
        };
    }

    addTask = () => {
        if (this.state.task.trim() === '') return;
        const newTask = {
            id: Date.now(),
            text: this.state.task,
        };
        this.setState({
            tasks: [...this.state.tasks, newTask],
            task: '',
        });
    };

    deleteTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => task.id !== id),
        });
    };

    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                <div>
                    <input
                        type="text"
                        value={this.state.task}
                        onChange={(e) => this.setState({ task: e.target.value })}
                        placeholder="Add a task"
                    />
                    <button onClick={this.addTask}>Add</button>
                </div>
                <ul>
                    {this.state.tasks.map((task) => (
                        <li key={task.id}>
                            {task.text}{' '}
                            <button onClick={() => this.deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDo;
