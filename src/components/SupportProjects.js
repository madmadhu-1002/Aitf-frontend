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
      <div className="min-w-full flex-shrink-0 position-relative " data-aos='zoom-in'>
        <Image
          src="/assets/image 39 (1).png"
          width={1614}
          height={1076}
          alt="banners"
          layout="responsive"
        />
        <div className="d-flex justify-content-center">
          <div className={`${styles.projectsDiv} text-white text-center`}>
            <h1 className="fw-bold display-6 display-md-5 display-lg-4">you can&#39;t literally &quot;find&quot; a best friend for your car</h1>

          </div>
        </div>

      </div>
      <Container fluid>
        <h1 style={{ marginBottom: '0.3rem', fontSize: '36px', fontWeight: 700 }}>Projects</h1>
        <Row>
          <Col sm={4}>
            <Projects />
          </Col>
          <Col sm={4}>
            <Projects />
          </Col>
          <Col sm={4}>
            <Projects />
          </Col>
          <Col sm={4}>
            <Projects />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h3>After Sales Support</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Col>
          <Col>
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
      <Container>
        <Row>
          <Col>
            <Image
              src="/assets/image 9.png"
              width={583}
              height={469}
              alt="a car"
              layout="responsive"
            />
          </Col>
          <Col>
            <h3>After Sales Support</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Col>

        </Row>
      </Container>
      <Container className='bg-black text-white mt-3 mb-3'>
        <Row>
          <Col className='pt-5'>
            <h3>Training</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className="d-flex flex-wrap gap-2">
              <Button variant="primary">Contact Us</Button>
              <Button variant="light">Training</Button>
            </div>
          </Col>
          <Col>
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