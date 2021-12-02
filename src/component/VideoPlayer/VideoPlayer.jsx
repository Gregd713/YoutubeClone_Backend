import React, {Component} from "react";


const VideoPlayer = ({ video, videoObject }) => {
    const videoSrc = `https://www.youtube.com/embed/${video}?autoplay=1&origin=http://example.com`
    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={ videoSrc }
                frameborder="0">
            </iframe>)}
            <h3>{videoObject}</h3>
        </div>
    )
}
    

export default VideoPlayer;