"use client"

import { Container } from "react-bootstrap";
import { useState } from "react";

const Videos = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <>
    <Container className="mt-5">
        <h1 style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Videos</h1>
        <div style={videostyles.card}>
          <div style={videostyles.imageContainer}>
            <img
              src="/assets/image 30.png"
              alt="Benz Cyberstar"
              style={videostyles.image}
            />
            <div style={videostyles.overlay}>
              <div style={videostyles.playButton}></div>
            </div>
          </div>
          <div style={videostyles.content}>
            <h3 style={videostyles.title}>Benz Cyberstar</h3>
            <p style={videostyles.subtitle}>Complete performance upgrade package</p>
          </div>
        </div>
      </Container>
      <Container className="mt-5">
        <h1 style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Popular Modifications</h1>
        <div
        style={{
          borderRadius: '5px',
          overflow: 'hidden',
          boxShadow: hovered ? '0 10px 20px rgba(0, 0, 0, 0.15)' : 'none',
          transition: 'box-shadow 0.3s ease',
          background: '#fff',
          width: '300px',
          marginTop: '2rem',
        }}
      >
        <img
          src="/assets/image.png"
          alt="Audi Competition"
          style={{
            width: '100%',
            display: 'block',
          }} />
      </div>
      </Container>
    </>
  )
}

const videostyles = {
    card: {
      width: '350px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'sans-serif',
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
      filter: 'brightness(60%)', // Darken image
    },
    overlay: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    playButton: {
      width: '50px',
      height: '50px',
      backgroundColor: '#fff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
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

export default Videos