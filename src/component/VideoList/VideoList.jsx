import React from "react";

import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onSelectVideo={onSelectVideo}  key={id} video={video} />)

    return listOfVideos;
}



export default VideoList;