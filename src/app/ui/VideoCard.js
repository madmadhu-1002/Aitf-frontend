"use client"

import { useRef, useState } from "react";

const VideoCard = () => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <>
    <div style={videostyles.wrapper}>
    <div style={videostyles.card}>
    <div
      style={videostyles.imageContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src="/assets/racing.mp4"
        poster="/assets/image 30.png"
        style={videostyles.image}
        muted
        loop
      />
      {/* Play button shows on hover only */}
      {!isHovered && (
        <div style={videostyles.overlay} onClick={() => {
            videoRef.current?.play();
            setIsHovered(true);
          }}>
          <div style={videostyles.playButton}></div>
        </div>
      )}
    </div>
    <div style={videostyles.content}>
            <h3 style={videostyles.title}>Benz Cyberstar</h3>
            <p style={videostyles.subtitle}>Complete performance upgrade package</p>
          </div>
          </div>
          </div>
    </>
    
  );
};

const videostyles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%', // optional if you want vertical centering also
  },
  card: {
    width: '350px',
    overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    zIndex: 2,
  },
  playButton: {
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><polygon points='22,15 22,45 45,30' /></svg>")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '20px',
  },
  content: {
    padding: '16px',
  },
  title: {
    margin: '0',
    fontSize: '18px',
    fontWeight: '600',
  },
  subtitle: {
    margin: '4px 0 0 0',
    fontSize: '14px',
    color: '#555',
  },
};

export default VideoCard;
