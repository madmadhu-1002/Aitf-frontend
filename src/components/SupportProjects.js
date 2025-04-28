"use client"

import Image from 'next/image';
import styles from '@/styles/SupportProject.module.css'
import Projects from './Projects';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from "aos";
import { useEffect } from "react";

const SupportProjects = () => {
  useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true,     // whether animation should happen only once
        });
      }, []);
  return (
    <>
      <div className="min-w-full flex-shrink-0 position-relative p-2" data-aos='zoom-in'>
        <Image
          src="/assets/image 39 (1).png"
          width={1614}
          height={1076}
          alt="banners"
          layout="responsive"
          className='rounded-3'
        />
        <div className="d-flex justify-content-center">
          <div className={`${styles.projectsDiv} text-white text-center`}>
            <h1 className={`${styles.textFontMd} fw-bold display-6 display-md-5 display-lg-4`}>you can&#39;t literally &quot;find&quot; a best friend for your car</h1>

          </div>
        </div>

      </div>
      <Container fluid className={` ${styles.carListBg} ps-4 pe-5  pt-5`}>
        <h1 style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 600 }} className='ps-4 pt-5'>Projects</h1>
        <Row>
          <Col lg={4} md={6} className='p-0'>
            <Projects image={"/assets/image 23.png"}/>
          </Col>
          <Col lg={4} md={6} className='p-0'>
            <Projects image={"/assets/transform2.png"}/>
          </Col>
          <Col lg={4} md={6} className='p-0'>
            <Projects image={"/assets/transform3.png"}/>
          </Col>
          
        </Row>
      </Container>
      <Container fluid className={` ${styles.carListBg} p-5`}>
        <Row>
          <Col md={6}>
            <h2>After Sales Support</h2>
            <p style={{ lineHeight: '1.8' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <p style={{ lineHeight: '1.8' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Col>
          <Col md={6}>
            <Image
              src="/assets/BESTUNE T77.png"
              width={706}
              height={416}
              alt="bestune car"
              layout="responsive"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className={` ${styles.carListBg} p-5`}>
        <Row>
          <Col md={6}>
            <Image
              src="/assets/image 9.png"
              width={583}
              height={469}
              alt="a car"
              layout="responsive"
            />
          </Col>
          <Col md={6}>
            <h3 className='pt-4'>After Sales Support</h3>
            <p style={{ lineHeight: '1.8' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <p style={{ lineHeight: '1.8' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Col>

        </Row>
      </Container>
      <Container fluid className={` ${styles.carListBg} text-white pb-5`}>
        <Row className='bg-black '>
          <Col className='p-5' md={6}>
            <h2>Training</h2>
            <p style={{ lineHeight: '1.8' }} className='fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className="d-flex flex-wrap gap-2">
              <Button variant="primary" className='rounded-1 px-4 py-1'>Contact Us</Button>
              <Button variant="light" className='rounded-1 px-4 py-1'>Training</Button>
            </div>
          </Col>
          <Col md={6}>
            <Image
              src="/assets/image 7.png"
              width={583}
              height={469}
              alt="a car"
              layout="responsive"
            />
          </Col>
        </Row>

      </Container>
      

    </>
  )
}

export default SupportProjects