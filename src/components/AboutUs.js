"use client"

import React from 'react'
import Image from 'next/image';
import { FaRegLightbulb, FaHandsHelping, FaUsers, FaTwitter, FaLinkedin, FaFacebook, FaDribbble } from 'react-icons/fa';
import styles from '@/styles/AboutUs.module.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import AOS from "aos";
import { useEffect } from "react";



const philosophyPoints = [
  {
    title: 'Our Vision',
    description: 'We foster a culture that embraces creativity and forward-thinking solutions.',
    icon: <FaRegLightbulb className="text-3xl text-blue-600" />,
  },
  {
    title: 'Our Mission',
    description: 'We believe in the power of teamwork and strategic partnerships.',
    icon: <FaHandsHelping className="text-3xl text-green-600" />,
  },
  {
    title: 'Our Values',
    description: 'Our employees and clients are at the heart of everything we do.',
    icon: <FaUsers className="text-3xl text-purple-600" />,
  },
];

const teamMembers = Array(6).fill({
  name: 'Sarah Chen',
  title: 'Senior UX Designer',
  description: '10+ years of experience in creating user-centered digital experiences for global brands.',
  image: '/assets/image 28.png', // Replace with your actual image path
});

const AboutUs = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true,     // whether animation should happen only once
      });
    }, []);
  return (
    <>
      <div className="min-w-full flex-shrink-0 position-relative " data-aos='zoom-in'>
        <Image
          src="/assets/about.png"
          width={1467}
          height={614}
          alt="banners"
          layout="responsive"
        />
        <div className={`${styles.aboutDiv} text-white text-center h-50`}>
          <h2 className={`${styles.textFontMd} fw-bold`}>Leading the Way in <span className='fs-6 text-primary'>vehicle modifications</span></h2>
          <h2 className={`${styles.textFontMd} fw-bold`}><span className='fs-6 text-primary'>and </span> Specialized Conversions</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className={`${styles.aboutButton} text-white text-center`}>
            <Button>Get In Touch</Button>
          </div>
        </div>

      </div>
      {/* about */}
      <Container fluid className={styles.ambulance}>
        <Row data-aos="fade-right">

          <Col sm={6} className="d-flex flex-column justify-content-end">
            <div>
              <Image
                src="/assets/miltary1.png"
                width={1920}
                height={860}
                alt="ambulance"
                layout="responsive"

              />
            </div>
          </Col>
          <Col sm={6}>
            <div className={`${styles.carouselDiv} ms-2 text-dark`} >
              <h2 className="fw-bold display-6 display-md-5 display-lg-4">About AITF</h2>
              <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
              <p className="fs-6 fs-md-5 fs-lg-4">We meticulously design our extensive range of products and services to enhance your vehicle&#39;s performance and potential, efficiently addressing all aftermarket needs.</p>
              <Button variant="dark">Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* history */}
      <Container fluid className={`${styles.ambulance} mb-3`}>
        <Row data-aos="fade-up">


          <Col sm={6} className='order-2 order-sm-1'>
            <div className={`${styles.carouselDiv} ms-2 text-dark `} >
              <h2 className="fw-bold display-6 display-md-5 display-lg-4">History Of AITF</h2>
              <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
              <p className="fs-6 fs-md-5 fs-lg-4">Our industry experience spans over 65 years. Our expansive footprint and robust network are our greatest strengths.</p>
              <p className="fs-6 fs-md-5 fs-lg-4">Guided by a corporate vision to be a globally recognized business group that creates lifelong customer relationships, Bahwan International Group boasts an impressive portfolio of brands, including Suzuki, Changan, Foton, BAIC, Iveco, CASE, Terex, Wacker Neuson, and Topcon, among many others.</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Button variant="dark">Read More</Button>
                <Button variant="primary">Contact Us</Button>
              </div>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column justify-content-end order-1 order-sm-2">
            <div>
              <Image
                src="/assets/miltary1.png"
                width={1920}
                height={860}
                alt="ambulance"
                layout="responsive"

              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* case study */}
      <Container fluid className={`bg-black p-3 text-white ${styles.ambulance}`}>
        <Row >
          <Col sm={5} className="d-flex flex-column justify-content-end">
            <div>
              <Image
                src="/assets/miltary1.png"
                width={1920}
                height={860}
                alt="ambulance"
                layout="responsive"

              />
            </div>
          </Col>
          <Col sm={7}>
            <div className={`${styles.carouselDiv} ms-2 mt-3`} >
              <h2 className="fw-bold display-6 display-md-5 display-lg-4">Nissan Y62</h2>
              <p className="fs-4 fs-md-3 fs-lg-2">&quot;I chose AWeber because I simply could not find any other provider that offered all the tools I needed under one platform, such as autoresponders, self-hosted sign up forms, and integration with third-party apps. I also love AWeber&#39;s pay-as-you-grow billing scale, which enables companies with smaller mailing lists to have full access to all the robust features AWeber offers without being up-charged.&quot;</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Button  variant="primary" className='p'>Read More</Button>
                <Button variant="dark">Know More</Button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
      {/* philosophy */}
      <section className="bg-white">
      <Container className="py-5 text-center">
        <h2 className="fw-semibold mb-4">Our Philosophy</h2>
        <Row className="g-4">
          {philosophyPoints.map((point, index) => (
            <Col md={4} key={index}>
              <Card className="border-0 h-100" data-aos='flip-left'>
                <Card.Body className="p-4 bg-light rounded shadow-sm">
                  <div className="mb-3 d-flex justify-content-center">
                    {point.icon}
                  </div>
                  <h3 className="h5 mb-2">{point.title}</h3>
                  <Card.Text className="text-muted mb-0">
                    {point.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      {/* our team */}
      <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center h3 fw-semibold mb-4">Team of Experts</h2>
        <Row className="g-4">
          {teamMembers.map((member, idx) => (
            <Col md={4} key={idx} data-aos='fade-up'>
              <Card className="text-center h-100 border-0">
                <div className="mx-auto mt-3" style={{ width: 120, height: 120 }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-circle"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="h6">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                  <Card.Text className="text-muted" style={{ fontSize: '0.875rem' }}>
                    {member.description}
                  </Card.Text>
                  <div className="d-flex justify-content-center gap-3 text-primary fs-5">
                    {/* Icons could go here */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  )
}

export default AboutUs