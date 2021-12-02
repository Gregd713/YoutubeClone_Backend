import React from "react";

const VideoItem = ({ video }) => {
    return(
        <div>
            <ul>
                <h4>{video.snippet.title}</h4>
                <img  src={video.snippet.thumbnails.default.url} />
                <h4>{video.snippet.description}</h4>
            </ul>       
        </div>
    )
    
}


export default VideoItem;