"use client"

import { Container, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import VideoCard from "./VideoCard";
import ModificationCard from "./ModificationCard";

const Videos = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <Container className="mt-5">
        <h1 style={{ marginBottom: '0.3rem', fontSize: '32px', fontWeight: 700 }}>Videos</h1>
        <Row>
          <Col md={4}>
            <VideoCard />
          </Col>
          <Col md={4}>
          <VideoCard />
          </Col>
          <Col md={4}>
          <VideoCard />
          </Col>
          
        </Row>


      </Container>
      <Container className="mt-5">
        <h1 style={{ marginBottom: '0.3rem', fontSize: '32px', fontWeight: 700 }}>Popular Modifications</h1>
        <Row>
          <Col md={3}>
            <ModificationCard />
          </Col>
          <Col md={3}>
            <ModificationCard />
          </Col>
          <Col md={3}>
            <ModificationCard />
          </Col>
          <Col md={3}>
            <ModificationCard />
          </Col>
        </Row>
        <div className="d-flex mt-4">
          <div className="ms-auto">
            <Button>Load More</Button>
          </div>
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