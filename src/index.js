import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDjSt3ZNqQ6V0BEPyHECwRD3egzqV8Cxc8';

// Create a new component, and this comonent should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key:API_KEY, term:"elon musk" }, (videos) => {
      this.setState( { videos } )
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on to the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
