import React, {Component} from "react";

// class VideoPlayer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             videoProgress = null
//         }
//     }


// }
const VideoPlayer = (props) => {
    return (<iframe id="ytplayer" type="text/html" width="640" height="360"
    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
    frameborder="0"></iframe>)
}

export default VideoPlayer;