import React, {useRef, useState} from "react";
import VideoFooter from './VideoFooter.js';
import './Video.css';

function Video() {
    const [playing, setplay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setplay(false);
        } else {
            videoRef.current.play();
            setplay(true);
        }
    };

    return  (
    <div className="video">
        <video 
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/57053a57570daffee63f4aad8859cb7b/5f293a9b/video/tos/useast2a/tos-useast2a-ve-0068c004/daefa85f76b44411a2c8db9b3ec00321/?a=1233&br=2440&bt=1220&cr=0&cs=0&dr=0&ds=3&er=&l=202008021038180101902090882BB7E224&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajkzanJmeXhqdTMzMzczM0ApOTYzZDNkNWVnN2llaDlnZGdmb2Jra2A0LWFfLS0yMTZzcy0uMi5jXi8uLi8zNGMyLjI6Yw%3D%3D&vl=&vr=">
        </video>
        <VideoFooter />
        {/* <VideoSidebar/>*/}
    </div>
    );
    
}

export default Video;