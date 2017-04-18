import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDjSt3ZNqQ6V0BEPyHECwRD3egzqV8Cxc8';

// Create a new component, and this comonent should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Elon Musk");
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
            videos={this.state.videos}
            onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on to the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
