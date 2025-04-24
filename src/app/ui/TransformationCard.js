"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const TransformationCard = ({image, title, subtitle, price}) => {
    const [hovered, setHovered] = useState(false);
  return (
    <>
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
            src={image}
            alt="Audi Competition"
            width={437} // set your preferred width
            height={300} // set your preferred height
            style={{
              height: 'auto',
              display: 'block',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ marginBottom: '0.3rem', fontSize: '24px', fontWeight: 700 }}>{title}</h3>
                <p style={{ margin: 0, color: 'gray' }}>
                  {subtitle}
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                  <strong>{price}</strong>
                  <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
                    Learn more..
                  </a>
                </div>
              </div>
            </div>
    </>
  )
}


const styles = {
    card: {
      border: '1px solid #d4d4d4',
      borderRadius: '5px',
      padding: '16px',
      boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
      maxWidth: '300px',
      fontFamily: 'sans-serif',
      marginBottom: '20px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#e2d6fd',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '8px',
      fontSize: '16px'
    },
    name: {
      fontWeight: '500',
      fontSize: '14px'
    },
    stars: {
      color: '#FFC700',
      fontSize: '14px'
    },
    reviewText: {
      marginTop: '12px',
      fontSize: '16px',
      fontWeight: '400'
    }
  };

export default TransformationCard