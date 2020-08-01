import React from "react";
import './Video.css'

function Video() {
    return  (
    <div className="video">
        <video className="video__player" 
        loop
        src="https://www.tiktok.com/@abrameng/video/6852099259865615622">

        </video>
        {/* <VideoFooter/> */}
        {/* <VideoSidebar/>*/ }
    </div>
    );
    
}

export default Video;