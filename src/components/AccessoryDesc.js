"use client"

import {useState} from 'react'
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';
import EmblaCarouselWithThumbnails from '@/app/ui/EmblaCarouselWithThumbnails';

const slides = [
    '/assets/image 1.png',
    '/assets/image 1.png',
    '/assets/image 1.png',
    '/assets/image 1.png',
];

const AccessoryDesc = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <EmblaCarouselWithThumbnails slides={slides} />
                    </Col>
                    <Col>
                        <h2>Description</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button variant="dark">Download Brochure</Button>
                    </Col>
                </Row>
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
            <Image
        src="/assets/image 41.png"
        alt="Tent on Car"
        width={800}   // specify real image dimensions or adjust as needed
        height={600}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
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
        <Container fluid className='mt-3 me-0'>
        <Row>
          <Col sm={6} className='ms-3'>
            <div>
              <h3>
                Contact Us
              </h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
              <h3>Follow us</h3>
              <div style={{ display: 'flex', gap: '10px', fontSize: '1.5rem' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              </div>
            </div>
            <div>
              <Image
                src="/assets/BESTUNE T77 1.png"
                width={532}
                height={314}
                alt="yellow car"
                layout="responsive"
              />
            </div>
          </Col>
          <Col>
            <div className="p-4 bg-white shadow rounded" style={{ maxWidth: "600px", margin: "0 auto" }}>
              <h4 className="mb-4 fw-bold">Send Us a message</h4>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="firstName">
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="lastName">
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="jobTitle">
                      <Form.Control type="text" placeholder="Job Title" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Control type="email" placeholder="Email ID" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="address" className="mb-3">
                  <Form.Control type="text" placeholder="Address" />
                </Form.Group>

                <Form.Group controlId="message" className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Message" />
                </Form.Group>

                <Form.Group controlId="privacy" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the privacy statement and understand how my personal data will be processed."
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Get In touch
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default AccessoryDesc