import React, { Component } from 'react';

class Task extends Component {

  render () {
    const styles = this.props.mruczek ? { textDecoration: 'line-through' } : {};
    return (
      <div>
         <p style={styles}>{this.props.fafik}</p>
      </div>
    );
  }
}

export default Task;
