import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter.js";
import "./Video.css";

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

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/f880234e7bc5dc75c0929e91bd4bc988/5f4f1d03/video/tos/useast2a/tos-useast2a-ve-0068c001/31ff20ef5ae14ee5947f1556078f86bc/?a=1233&amp;br=2132&amp;bt=1066&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=202009012218030101880612153C2C2C99&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=aml2ZDhydGw2dzMzNzczM0ApMzZpOjs6PDs7Nzg2ZTszOWdqLWVxa2dfajRfLS1eMTZzczEtX15hNi8xMC1hLmMwYWM6Yw%3D%3D&amp;vl=&amp;vr="
      ></video>
      <VideoFooter />
      {/* <VideoSidebar/>*/}
    </div>
  );
}

export default Video;
