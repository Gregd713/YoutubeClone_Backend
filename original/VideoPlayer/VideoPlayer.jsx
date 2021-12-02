// import React, {Component, useEffect, useState} from "react";

   
// function VideoPlayer() {
//     const[selectedVideo, setSelectedVideo] = useState(null);
//     useEffect(() => {
//         getSelectedVideo();
//     }, [])

//     async function getSelectedVideo(){
//             const response = "GbtF3oA7NMM";
//             console.log(response);
//             setSelectedVideo(response);
//     }

//     return (
//         <div>
//             <div>
//                 {selectedVideo &&
//                 <iframe id="ytplayer" type="text/html" width="640" height="360"
//                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&origin=http://example.com`} frameborder="0">
//                 </iframe>
//                 }
//                 <h1>Title</h1>
//             </div>
//         </div> 
//     )
// }


// export default VideoPlayer;