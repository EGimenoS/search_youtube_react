import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './keys'
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';

//create a new component. This component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }
    render() {
        return  (
        <div>
            <SearchBar />
            <VideoList videos={ this.state.videos } />
        </div>
        );
    }
}

//take this component's generated HTML and put it on the page(DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


