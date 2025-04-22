"use client"

import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    const [hovered, setHovered] = useState(false);
    return (
      <>
      <Container className="mt-5">
        <h1 className='text-center' style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Latest Transformations</h1>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: hovered ? '0 10px 20px rgba(0, 0, 0, 0.15)' : 'none',
            transition: 'box-shadow 0.3s ease',
            background: '#fff',
            width: '400px',
            margin: '1rem',
          }}
        >
          <img
            src="/assets/image 23.png"
            alt="Audi Competition"
            style={{
              width: '100%',
              display: 'block',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }} />
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
      <Container className="mt-5">
          <h1 className='text-center' style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Popular Accessories</h1>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: '350px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: hovered ? '0 10px 20px rgba(0,0,0,0.15)' : '0 0 0 rgba(0,0,0,0)',
              transition: 'box-shadow 0.3s ease-in-out',
              fontFamily: 'Arial, sans-serif',
              border: '1px solid #d4d4d4'
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src="/assets/image 41.png"
                alt="Tent on Car"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: hovered ? 'scale(1.03)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  backgroundColor: '#FFCC00',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                New Arrivals
              </div>
            </div>
   
            <div style={{ padding: '1rem' }}>
              <p style={{ fontSize: '12px', fontWeight: '600', color: '#8c8c8c', marginBottom: '4px' }}>
                4wd Recovery & Safety <span style={{ float: 'right', color: 'green' }}>In Stock</span>
              </p>
              <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '6px 0' }}>
                The roof top tent provides sleeping quarters off
              </h4>
   
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#FACC15', fontSize: '16px', marginRight: '4px' }}>★★★★★</span>
                <span style={{ fontSize: '14px', color: '#555' }}>
                  <strong style={{ color: '#000' }}>4.8</strong> (2,439)
                </span>
              </div>
   
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '20px', fontWeight: '600' }}>150 AED</h3>
   
              <button
                style={{
                  width: '100%',
                  padding: '10px 0',
                  backgroundColor: '#008AFB',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                Explore More
              </button>
            </div>
          </div>
        </Container>
        <Container className="mt-5">
          <h1 className='text-center' style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Customer Testimonials</h1>
          <p className='text-center' style={{ marginBottom: '0.3rem', fontSize: '16px', fontWeight: 400 }}>See what our customers say</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '1.5rem' }}>
            <button
              style={{
                padding: '10px 50px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Write a Review
            </button>
          </div>
          <div style={styles.card}>
            <div style={styles.header}>
              <div style={styles.userInfo}>
                <div style={styles.avatar}>
                  <img
                    src="/assets/avatar.png"
                    alt="User Avatar"
                    style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                  />
                </div>
                <span style={styles.name}>Sam Johnson</span>
              </div>
              <div style={styles.stars}>
                {'⭐️⭐️⭐️⭐️⭐️'}
              </div>
            </div>
            <p style={styles.reviewText}>
              Highly recommend for car<br />enthusiasts
            </p>
          </div>
        </Container>
      </>
   
    );
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

export default Cards