import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  // a class component must have render method.
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  // event handler method
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
