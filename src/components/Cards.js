"use client"

import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import TransformationCard from '@/app/ui/TransformationCard';
import AccessoryCard from '@/app/ui/AccessoryCard';
import TestimonialCard from '@/app/ui/TestimonialCard';

const Cards = () => {
    const [hovered, setHovered] = useState(false);
    return (
      <>
      <Container fluid className="mt-5 border-bottom border-black">
        <h1 className='text-center' style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Latest Transformations</h1>
        <Row>
          <Col lg={4} md={6} >
          <TransformationCard image={"/assets/image 23.png"} title={"AUDI Competition"} subtitle={"Complete performance upgrade package"} price={"AED 45,000"}/>
          </Col>
          <Col lg={4} md={6} >
          <TransformationCard image={"/assets/transform2.png"} title={"Benz Cyberstar"} subtitle={"Complete performance upgrade package"} price={"AED 55,000"}/>
          </Col>
          <Col lg={4} md={6} >
          <TransformationCard image={"/assets/transform3.png"} title={"Ranger Rover"} subtitle={"Complete performance upgrade package"} price={"AED 35,000"}/>
          </Col>
        </Row>
        
   
      </Container>
      <Container fluid className="mt-5 border-bottom border-black pb-5">
          <h1 className='text-center pb-5' style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Popular Accessories</h1>
          <Row className='g-3'>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/image 41.png"} newArrival={true}/>
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/accessory2.png"} newArrival={true}/>
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/accessory4.png"}/>
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/image 41.png"} newArrival={true}/>
          </Col>
        </Row>
        <div className="d-flex mt-4">
    <div className="ms-auto">
      <Button>View All</Button>
    </div>
  </div>
        
        </Container>
        <Container fluid className="mt-5 border-bottom border-black">
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
          <Row>
          <Col lg={3} md={4}  sm={6}>
          <TestimonialCard />
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <TestimonialCard />
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <TestimonialCard />
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <TestimonialCard />
          </Col>
        </Row> 
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