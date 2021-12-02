import React from "react";

const VideoItem = ({ video, onSelectVideo  }) => {
    return(
        // <div>
        //     <ul>
        //         <h4>{video.snippet.title}</h4>
        //         <img  src={video.snippet.thumbnails.default.url} />
        //         <h4>{video.snippet.description}</h4>
        //     </ul>       
        // </div>
        <table>
        <tr>
            <td><button onClick={() => onSelectVideo(video)}><img  src={video.snippet.thumbnails.default.url} /></button></td>
            <h4>{video.snippet.title}</h4>
            <h4>{video.snippet.description}</h4>   
        </tr>
        </table>
    )
    
}


export default VideoItem;