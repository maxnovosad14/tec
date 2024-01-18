import React, { useRef, useState } from "react";
import video from "../img/video/bg-vid.mp4";


function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="w-full h-screen relative overflow-hidden transition-all duration-700">
      <video
        ref={videoRef}
        autoPlay
        loop
        className="w-full brightness-50 absolute"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="h-screen flex items-center justify-center">
        <button
          onClick={togglePlayPause}
          className="play-pause-button w-28 h-28 relative rounded-full border-2 uppercase text-xs text-white items-center pr-3"
        >
          <span className="mr-2">•</span>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      {/* <div className="w-5/6 h-10 relative self-end bg-blue-100 ">fdsfdsfdsfdsfsdfusdjfj</div> */}
    </div>
  );
}

export default Video;
