import React from "react";

const VideoItem = ({ video }) => {
    return(
        <div className="row-row">
            <ul><img  src={video.snippet.thumbnails.default.url} /></ul>       
        </div>
    )
    
}


export default VideoItem;