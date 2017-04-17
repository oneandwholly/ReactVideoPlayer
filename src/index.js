import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, and this comonent should produce some HTML.

const App = () => {
  return <div>Hi!</div>;
};

// Take this component's generated HTML and put it on to the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
