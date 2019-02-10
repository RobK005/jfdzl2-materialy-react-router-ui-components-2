import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CreateTask extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({ name:  event.target.value });
  }

  keyDown = (event) => {
    if (!this.state.name) {
      return;
    }
    if (event.keyCode === 13) {
      this.props.createHandler(this.state.name);
      this.setState({ name: '' });
    }
  }

  render() {
    return(
      <div>
        <TextField
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyDown={this.keyDown}
          />
      </div>
    );
  }
}

export default CreateTask;
