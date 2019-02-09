import React, { Component } from 'react';

import CreateTask from './CreateTask';
import TasksContainer from './TaskContainer';
class App extends Component {

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

  handleCreate = (name) => {
    const uuId = Math.floor(Math.random() * 10000);
    const tasks = [...this.state.tasks];
    const task = { id: uuId, name: name, completed: false };
    tasks.push(task);
    this.setState({ tasks: tasks }); // this.setState({ tasks });
  }

  handleRemove = (taskId) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({ tasks });
  }

  updateHandler = (newName, taskId) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const task = { ...this.state.tasks[taskIndex] };

    task.name = newName;

    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;

    this.setState({ tasks: tasks });  // this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <CreateTask createHandler={this.handleCreate} />
        <TasksContainer
          todo={this.state.tasks}
          handleChange={this.handleChange}
          handleRemove={this.handleRemove}
          updateHandler={this.updateHandler}
          />
      </div>
    );
  }
}

export default App;
