"use client"

import {useState} from 'react'
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';
import EmblaCarouselWithThumbnails from '@/app/ui/EmblaCarouselWithThumbnails';
import AccessoryCard from '@/app/ui/AccessoryCard';

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
            <Container fluid className="mt-5 border-bottom border-black pb-5">
          <h1 className='text-center' style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Popular Accessories</h1>
          <Row>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/image 41.png"} newArrival={true}/>
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/accessory2.png"} newArrival={true}/>
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/accessory4.png"} newArrival={true}/>
          </Col>
          <Col lg={3} md={4}  sm={6}>
          <AccessoryCard image={"/assets/image 41.png"}/>
          </Col>
        </Row>
        <div className="d-flex mt-4">
    <div className="ms-auto">
      <Button>View All</Button>
    </div>
  </div>
        
        </Container>
        <Container fluid className='mt-3 me-0'>
        <Row>
          <Col sm={6} >
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