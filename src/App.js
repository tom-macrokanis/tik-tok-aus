import React from "react";
import Video from "./Video.js";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/60d6539c269651701e48a5841550f278/5f50678f/video/tos/useast2a/tos-useast2a-pve-0068/2bdc6a9bccc94854aaecc9179c0ea3f4/?a=1233&amp;br=1644&amp;bt=822&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=202009022148200101890501592F2C2952&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=amc5dWpvcmh1dzMzZTczM0ApPDQ6OTxkaTw1NzpoOjg2PGcwLmZwbmVyYjRfLS1eMTZzczIuYDFiNjYyNGEwLS0tNl46Yw%3D%3D&amp;vl=&amp;vr="
          channel="tom"
          description="Wow"
          song="aljksdhlasjd"
          like={123}
          messages={3343}
          shares={34}
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
