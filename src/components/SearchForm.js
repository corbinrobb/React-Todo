import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
        <input 
          placeholder="search"
          value={this.props.term}
          onChange={this.props.onSearchChange}
        />
    );
  }
}

export default SearchForm;