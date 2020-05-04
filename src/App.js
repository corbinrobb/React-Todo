import React from 'react';
import TodoList from './components/TodoList';
import SearchForm from './components/SearchForm';
import './App.css';

class App extends React.Component {
  state = {
    list: [],
    term: ''
  }

  componentDidMount() {
    if(!localStorage.getItem('list')) {
      localStorage.setItem('list', JSON.stringify({
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
      }));
    }

    this.setState(JSON.parse(localStorage.getItem('list')))
  }

  onFormSubmit = (todo) => {
    const newList = { list: [...this.state.list, todo] };
    this.setState(newList);
    localStorage.setItem('list', JSON.stringify(newList));
  }

  onClear = (e) => {
    e.preventDefault();
    const newList = { list: this.state.list.filter(item => !item.completed) };
    this.setState(newList);
    localStorage.setItem('list', JSON.stringify(newList));
  }

  onClick = (index) => {
    const newList = [...this.state.list];
    newList.splice(index, 1, { ...this.state.list[index], completed: !this.state.list[index].completed });
    this.setState({ list: newList });
    localStorage.setItem('list', JSON.stringify({ list: newList }));
  }

  onSearchChange = e => {
    this.setState({ term: e.target.value })
  }

  render() {
    return (
      <div className="container ">
        <SearchForm term={this.state.term} onSearchChange={this.onSearchChange} />
        <h2>Todo List</h2>
        <TodoList term={this.state.term} onClick={this.onClick} onSubmit={this.onFormSubmit} onClear={this.onClear} list={this.state.list} />
      </div>
    );
  }
}

export default App;
