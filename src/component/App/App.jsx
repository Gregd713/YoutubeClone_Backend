import React, {Component} from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: []
        }
        
    }

    componentDidMount() {
        this.makeGetRequest();
    }

    async makeGetRequest() {
        try{
            let response = await axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAcOzLVYyqhOxqYNGHLXdqhg3jr-pJhjKg&maxResults=10&type=video&videoEmbeddable=true");
            console.log(response.data);
            this.setState({
                state: response.data
            })
        }
        catch{
            console.log("Error in API call!")
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Hello!</h1>
            </div>
        )
    }
}

export default App;