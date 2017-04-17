import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDjSt3ZNqQ6V0BEPyHECwRD3egzqV8Cxc8';

// Create a new component, and this comonent should produce some HTML.

const App = () => {
  return <div>Hi!</div>;
};

// Take this component's generated HTML and put it on to the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
