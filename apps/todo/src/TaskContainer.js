import React, { Component } from 'react';

class TaskContainer extends Component {

  state = {
    day: 'sobota',
    tasks: [
      'Odkurzyc', 'Zakupy', 'Nauczyć się Reacta'
    ]
  };

  render() {
    return (
      <div>
        {this.state.tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </div>
    );
  }
}

export default TaskContainer;
