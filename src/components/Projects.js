"use client"

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

const Projects = () => {
  
  const [hovered, setHovered] = useState(false);
  return (
    <>
    <Container className="mt-5">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: hovered ? '0 10px 20px rgba(0, 0, 0, 0.15)' : 'none',
            transition: 'box-shadow 0.3s ease',
            background: '#fff',
            margin: '1rem',
          }}
        >
          <Image
          src="/assets/image 23.png"
          alt="Audi Competition"
          width={500} // Replace with actual dimensions or responsive layout
          height={300}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ marginBottom: '0.3rem', fontSize: '24px', fontWeight: 700 }}>AUDI Competition</h3>
            <p style={{ margin: 0, color: 'gray' }}>
              Complete performance upgrade package
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <strong>AED 45,000</strong>
              <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
                Learn more..
              </a>
            </div>
          </div>
        </div>
   
      </Container>
    </>
  )
}

export default Projects