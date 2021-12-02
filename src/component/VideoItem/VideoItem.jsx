import React from "react";

const VideoItem = ({ video }) => {
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
            <td><img  src={video.snippet.thumbnails.default.url} /></td>
            <h4>{video.snippet.title}</h4>
            <h4>{video.snippet.description}</h4>
        </tr>
        </table>
    )
    
}


export default VideoItem;