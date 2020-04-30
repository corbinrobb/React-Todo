import React from 'react';

class TodoForm extends React.Component {
  state = {
    task: '',
    id: null,
    completed: false
  }

  onChange = (e) => {
    this.setState({ ...this.state, task: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.task) return;
    
    const id = Date.now();
    this.props.onSubmit({ ...this.state, id});
    this.setState({
      task: '',
      id: null,
      completed: false
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.task}
          onChange={this.onChange}
        />
        <button>Add todo!</button>
        <button onClick={this.props.onClear}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;