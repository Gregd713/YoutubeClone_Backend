import React, {Component, useEffect, useState} from "react";

// class VideoPlayer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             enteredVideoId: {},
//         }
//     }
    
//     selectedVideo() {
//         let response = "Tch4v0L0GHA";
//         console.log(response);
//         this.setState({
//             enteredVideoId: response
//         })
//     }
    
//     render() {
//        return(
//         <div>
//             <iframe id="ytplayer" type="text/html" width="640" height="360"
//                 src={`https://www.youtube.com/embed/${this.state.enteredVideoId}?autoplay=1&origin=http://example.com`}
//                 frameBorder="0">
//             </iframe>
//             <h1>The title and Description will go here.</h1>
//         </div>)
//     }

// }
// const VideoPlayer = (props) => {
    
//     return (<div>
//                 <iframe id="ytplayer" type="text/html" width="640" height="360"
//                     src="https://www.youtube.com/embed/_6Y52JHN-LA?autoplay=1&origin=http://example.com"
//                     frameborder="0">
//                 </iframe>
            
//                 <h1>The title and Description will go here.</h1>

//             </div>)}
    
function VideoPlayer() {
    const[selectedVideo, setSelectedVideo] = useState(null);
    useEffect(() => {
        getSelectedVideo();
    }, [])

    async function getSelectedVideo(){
            const response = "GbtF3oA7NMM";
            console.log(response);
            setSelectedVideo(response);
    }

    return (
        <div>
            <div>
                {selectedVideo &&
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                   src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&origin=http://example.com`} frameborder="0">
                </iframe>
                }
                <h1>The title and Description will go here.</h1>
            </div>
        </div>
    )
}


export default VideoPlayer;