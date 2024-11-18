import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Using react-icons

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.muted = false;
    } else {
      videoRef.current.muted = true;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="video-section">
      <h4>See the product in action!</h4>
      <div className="video-wrapper">
        <video ref={videoRef} className="video-style">
          <source
            src="https://m.media-amazon.com/images/S/aplus-media/sc/887a712c-86e6-4855-bbce-07bc0d2c9e10.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-controls">
          <button onClick={togglePlayPause} className="control-button">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={toggleMute} className="control-button">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
