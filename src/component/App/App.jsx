import React, {Component} from "react";
import youtube from "../../api/youtube";
import "./App.css";
import "../VideoPlayer/VideoPlayer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: [],
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 10,
                key: 'AIzaSyAcOzLVYyqhOxqYNGHLXdqhg3jr-pJhjKg',
                q: searchTerm,
            
            }
        });

        console.log(response.data.items);

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <div className="container-fluid">
                <h1>Hello!</h1>
                <SearchBar onFormSubmit={this.handleSubmit} />
                <VideoPlayer video={selectedVideo} />
                <VideoList videos={ videos } />
            </div>
        )
    }
}

export default App;