import React, {Component} from "react";


const VideoPlayer = ({ video }) => {
    const videoSrc = `https://www.youtube.com/embed/GbtF3oA7NMM?autoplay=1&origin=http://example.com`
    return (
        <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={ videoSrc }
            frameborder="0">
        </iframe>)}
    

export default VideoPlayer;