import React, { Component } from 'react';

class TaskContainer extends Component {

  state = {
    day: 'sobota',
    tasks: [
      { id: 1, name: 'Odkurzyc', comlpeted: false },
      { id: 2, name: 'Zakupy', comlpeted: false },
      { id: 3, name: 'Nauczyć się Reacta', comlpeted: false }
    ]
  };

  render() {
    return (
      <div>
        {this.state.tasks.map(task => (
          <p key={`t-${task.id}`}>{task.name}</p>
        ))}
      </div>
    );
  }
}

export default TaskContainer;
