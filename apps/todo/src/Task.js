import React, { Component } from 'react';

class Task extends Component {

  render () {
    // this.props.task = { id: 1, name: 'Odkurzyc', completed: false }
    const styles = this.props.task.completed
    ? { textDecoration: 'line-through' }
    : {};
    return (
      <div>
        <p style={styles}>
          <input
            type="checkbox"
            checked={this.props.task.completed}
            onChange={this.props.handleChange}
          />
          {this.props.task.name}
        </p>
      </div>
    );
  }
}

export default Task;
