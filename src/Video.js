import React, {useRef, useState} from "react";
import './Video.css'

function Video() {
    const [play, /*setplay*/] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
        } else {
        videoRef.current.play();
        }
    };

    return  (
    <div className="video">
        <video className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.tiktok.com/@abrameng/video/6852099259865615622">
        </video>
        {/* <VideoFooter/> */}
        {/* <VideoSidebar/>*/}
    </div>
    );
    
}

export default Video;