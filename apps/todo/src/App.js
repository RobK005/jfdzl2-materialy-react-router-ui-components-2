import React, { Component } from 'react';

import CreateTask from './CreateTask';
import TasksContainer from './TaskContainer';
class App extends Component {

  state = {
    tasks: []
  };

  componentWillMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({ tasks });
  }

  updateTask = (taskId, newValue, field) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const task = { ...this.state.tasks[taskIndex] };

    task[field] = newValue;

    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks: tasks });  // this.setState({ tasks });
  }

  handleChange = (event, taskId) => {
    this.updateTask(taskId, event.target.checked, 'completed');
  }

  updateHandler = (newName, taskId) => {
    this.updateTask(taskId, newName, 'name');
  }

  handleCreate = (name) => {
    const uuId = Math.floor(Math.random() * 10000);
    const tasks = [...this.state.tasks];
    const task = { id: uuId, name: name, completed: false };
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks: tasks }); // this.setState({ tasks });
  }

  handleRemove = (taskId) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.setState({ tasks });
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
