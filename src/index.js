import React, {Component} from 'react';
import ReactDOM from 'react-dom'; // load from node_modules
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // load from file.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCF9wVMXUrfqtAOTyq99lJSEXBV8Q-PY0c';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos:[] };

    YTSearch({ key:API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
}

ReactDOM.render(<App />,document.querySelector('.container'));
