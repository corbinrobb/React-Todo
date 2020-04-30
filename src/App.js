import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    list: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: true
      }
    ]
  }

  onFormSubmit = (todo) => {
    this.setState({ list: [ ...this.state.list,  todo] })
  }

  onClear = (e) => {
    e.preventDefault();
    this.setState({ list: this.state.list.filter(item => !item.completed )});
  }

  onClick = (index) => {
    const newList = [...this.state.list];
    newList.splice(index, 1, { ...this.state.list[index], completed: !this.state.list[index].completed });

    this.setState({ list: newList });
  }

  render() {
    console.log(this.state.list)
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList onClick={this.onClick} onSubmit={this.onFormSubmit} onClear={this.onClear} list={this.state.list} />
      </div>
    );
  }
}

export default App;
