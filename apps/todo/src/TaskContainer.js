import React, { Component } from 'react';

import Task from './Task';

class TaskContainer extends Component {

  state = {
    day: 'sobota',
    tasks: [
      { id: 95, name: 'Odkurzyc', completed: false },
      { id: 24, name: 'Zakupy', completed: true },
      { id: 542, name: 'Nauczyć się Reacta', completed: false }
    ]
  };

  handleChange = (event, taskId) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const task = { ...this.state.tasks[taskIndex] };

    task.completed = event.target.checked;

    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;

    this.setState({ tasks: tasks });  // this.setState({ tasks });
  }

  render() {
    return (
      <div>
        {this.state.tasks.map(task => (
          <Task
            key={`t-${task.id}`}
            task={task}
            handleChange={(event) => this.handleChange(event, task.id)}
          />
        ))}
      </div>
    );
  }
}

export default TaskContainer;
