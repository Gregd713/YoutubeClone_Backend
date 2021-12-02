import React, {Component} from "react";
import youtube from "../../api/youtube";
import "./App.css";
import "../VideoPlayer/VideoPlayer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import axios from "axios";



class App extends Component {
    state = {
        videos: [],
        selectedVideo: [],
        object: null,
    }
    
    componentDidMount(){
        this.handleSubmit("Never gonna give you up")
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
        console.log(response.data.items[0].id.videoId);
        console.log(response.data.items[0].snippet.title);
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0].id.videoId, object: response.data.items[0].snippet.title });
    }

    

    render() {
        // const { selectedVideo, videos } = this.state;
        return (
            <div className="container-fluid">
                <h1>Hello!</h1>
                <SearchBar onFormSubmit={this.handleSubmit} />
                <VideoPlayer video={this.state.selectedVideo} videoObject={this.state.object} />
                <VideoList videos={ this.state.videos } />
            </div>
        )
    }
}
export default App;