import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
  render() {
    return (
      <>
        <div className="list">
          {this.props.list.map((item, index) => <Todo index={index} onClick={this.props.onClick} key={item.id} data={item} />)}
        </div>
        <TodoForm 
          onSubmit={this.props.onSubmit}
          onClear={this.props.onClear}
        />
      </>
    );
  }
}

export default TodoList;