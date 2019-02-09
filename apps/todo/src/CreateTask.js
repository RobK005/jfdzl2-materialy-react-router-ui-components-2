import React, { Component } from 'react';

class CreateTask extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({ name:  event.target.value });
  }

  keyDown = (event) => {
    if (event.keyCode === 13) {
      this.props.createHandler(this.state.name);
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.keyDown}
          />
      </div>
    );
  }
}

export default CreateTask;
