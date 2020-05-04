import React from 'react';

class Todo extends React.Component {
  render() {
    const styles = { textDecoration: (this.props.data.completed) ? 'line-through' : 'none' };

    return (
      <div className="item">
        <p onClick={() => this.props.onClick(this.props.index)} style={styles}>{this.props.data.task}</p>
      </div>
    );
  }
}

export default Todo;