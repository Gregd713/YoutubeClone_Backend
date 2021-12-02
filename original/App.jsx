// import React, {Component} from "react";
// import axios from "axios";
// import "./App.css";
// import "./VideoPlayer/VideoPlayer";
// import VideoPlayer from "./VideoPlayer/VideoPlayer";

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchResults: []
//         }
        
//     }

//     componentDidMount() {
//         this.makeGetRequest();
//     }

//     async makeGetRequest() {
//         try{
//             let response = await axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAcOzLVYyqhOxqYNGHLXdqhg3jr-pJhjKg&maxResults=10&type=video&videoEmbeddable=true");
//             console.log(response.data);
//             this.setState({
//                 searchResults: response.data
//             })
//         }
//         catch{
//             console.log("Error in API call!")
//         }
//     }

//     // playMyVideo = (userInput) => {
//     //     let i=0;
//     //     let result = this.state.searchResults.filter((video) => {
//     //         if (userInput.placeHolder === this.state.searchResults.placeHolder) {
//     //             i++;
//     //             return true;
//     //           } else {
//     //               i++;
//     //               return false;
//     //           }
//     //         }
//     //     )
//     // }

//     render() {
//         return (
//             <div className="container-fluid">
//                 <h1>Hello!</h1>
//                 <VideoPlayer />
//                 {/* <SearchBar playTheVideo={this.playMyVideo/> */}
//             </div>
//         )
//     }
// }

// export default App;