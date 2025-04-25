"use client"

import React from 'react'
import Image from 'next/image';
import { FaRegLightbulb, FaHandsHelping, FaUsers, FaTwitter, FaLinkedin, FaFacebook, FaDribbble } from 'react-icons/fa';
import styles from '@/styles/AboutUs.module.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import AOS from "aos";
import { useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import ImageGrid from '@/app/ui/ImageGrid';



const philosophyPoints = [
  {
    title: 'Our Vision',
    description: 'A Globally Recognized business group creating customers for life',
    img: '/assets/vision.png',
  },
  {
    title: 'Our Mission',
    description: 'We are committed to diversity and innovatively delivering world-class products and services through empowered employees and creating value for our stakeholders.',
    img: '/assets/mission.png',
  },
  {
    title: 'Our Values',
    description: 'Integrity, Ownership, Passion and Excellence',
    img: '/assets/values.png',
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
            <Button className={`${styles.btn}`}>Get In Touch</Button>
          </div>
        </div>

      </div>
      {/* about */}
      <Container fluid className={`${styles.ambulance} p-5 main-bg`}>
        <Row data-aos="fade-right" className='mt-5'>

          <Col sm={6} className="d-flex flex-column justify-content-end">
            <div>
              <Image
                src="/assets/about1.png"
                width={1920}
                height={860}
                alt="ambulance"
                layout="responsive"

              />
            </div>
          </Col>
          <Col sm={6}>
            <div className={`${styles.carouselDiv} ms-2 text-dark`} >
              <h2 className="fw-bold display-6 display-md-5 display-lg-4" style={{ fontWeight: 700, fontSize: '48px' }}>About <span style={{ color: '#0071FF' }}>AITF</span></h2>
              <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
              <p className="fs-6 fs-md-5 fs-lg-4">We meticulously design our extensive range of products and services to enhance your vehicle&#39;s performance and potential, efficiently addressing all aftermarket needs.</p>
              <Button variant="dark" className={styles.btn1}>Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* history */}
      <Container fluid className={`${styles.ambulance} p-5 main-bg`}>
        <Row data-aos="fade-up">


          <Col sm={6} className='order-2 order-sm-1'>
            <div className={`${styles.carouselDiv} ms-2 text-dark `} >
              <h2 className="fw-bold display-6 display-md-5 display-lg-4 text-primary" style={{ fontSize: '48px', fontWeight: '700' }}>History Of AITF</h2>
              <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
              <p className="fs-6 fs-md-5 fs-lg-4">Our industry experience spans over 65 years. Our expansive footprint and robust network are our greatest strengths.</p>
              <p className="fs-6 fs-md-5 fs-lg-4">Guided by a corporate vision to be a globally recognized business group that creates lifelong customer relationships, Bahwan International Group boasts an impressive portfolio of brands, including Suzuki, Changan, Foton, BAIC, Iveco, CASE, Terex, Wacker Neuson, and Topcon, among many others.</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Button variant="dark" className={styles.btn1}>Read More</Button>
                <Button variant="primary" className={styles.btn2}>Contact Us</Button>
              </div>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column justify-content-end order-1 order-sm-2">
            <div>
              <Image
                src="/assets/miltary2.png"
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
      
      <Container fluid className={`border-bottom border-black text-white p-3 main-bg  ${styles.ambulance}`}>
      <h2 className=" display-6 display-md-5 display-lg-4 mt-3 mb-4 text-black" style={{ marginLeft: '20px', fontSize: '54px', fontWeight: '600',  }}>Case Study</h2>
        <Row className='bg-black'>
          <Col sm={5} className="d-flex flex-column justify-content-end">
            <div>
              <Image className='pt-2'
                src="/assets/miltary3.png"
                width={510}
                height={376}
                alt="ambulance"
                layout='responsive'
              />
            </div>
          </Col>
          <Col sm={7}>
            <div className={`${styles.carouselDiv} ms-2 mt-3 mb-3`} >
              <h2 className="fw-bold display-6 display-md-5 display-lg-4" style={{ marginRight: '20px', fontSize: '24px !important', fontWeight: '400' }}>Nissan Y62</h2>
              <p className="fs-4 fs-md-5 fs-lg-4" style={{ marginRight: '20px',  fontWeight: '400' }} >&quot;I chose AWeber because I simply could not find any other provider that offered all the tools I needed under one platform, such as autoresponders, self-hosted sign up forms, and integration with third-party apps. I also love AWeber&apos;s pay-as-you-grow billing scale, which enables companies with smaller mailing lists to have full access to all the robust features AWeber offers without being up-charged.&quot;</p>
              <div className="d-flex flex-wrap gap-2 pt-5">
                <Button className={`${styles.btn2}`}>Read More</Button>
                <Button className={`${styles.btn3}`}>Know More</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* our upgraded services */}
      
      <ImageGrid />
      {/* philosophy */}
      <section className="main-bg border-bottom border-top border-black">
      <Container className="py-5 text-center ">
        <h2 className="fw-semibold mb-4 fs-1 p-4">Our Philosophy</h2>
        <Row className="g-4">
          {philosophyPoints.map((point, index) => (
            <Col md={4} key={index}>
              <div className={styles.card}>
            <div className={styles.headerRow}>
              <div className={styles.iconCircle}>
              <Image src={point.img} width={40} height={40} alt="Vision Icon" />
              </div>
              <h3>{point.title}</h3>
            </div>
            <p>{point.description}</p>
          </div>
              
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      {/* our team */}
      <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center h3 fw-semibold pb-5" style={{fontSize:'40px', fontWeight:'600'}}>Team of Experts</h2>
        <Row className="g-4">
          {teamMembers.map((member, idx) => (
            <Col lg={4} md={6} key={idx} data-aos='fade-up'>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 font-sans mb-4 rounded-4">
      {/* Top Image */}
      <div className="w-100 position-relative" style={{ height: "250px" }}>
        <Image
          src={member.image}
          alt="Sarah Chen"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Middle Section */}
      <div className="border-top px-4 pt-3 ">
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold text-dark" style={{fontSize:'20px', fontWeight:'600'}}>Sarah Chen</span>
          <span className="text-muted small" style={{fontSize:'16px', fontWeight:'500', marginLeft:'10px'}}>Senior UX Designer</span>
        </div>
      </div>
       <hr></hr>
      {/* Bio */}
      <div className="px-4 pb-3">
        <p className="text-muted small mb-2" style={{fontSize:'16px', fontWeight:'400'}}>
          10+ years of experience in creating user-centered digital experiences
          for global brands
        </p>
      </div>

      {/* Social Icons */}
      <div className="px-4 pb-4 d-flex gap-1 fs-5" style={{color:'#0056A8'}}>
        <FaInstagram />
        <FaFacebookF />
        <FaYoutube />
        <FaXTwitter />
        <FaTiktok />
      </div>
    </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    
    </>
  )
}

export default AboutUs