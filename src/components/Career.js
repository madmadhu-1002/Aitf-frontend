"use client"

import React from 'react'
import styles from '@/styles/Career.module.css'
import JobCard from '@/app/ui/JobCard'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import AOS from "aos";
import { useEffect } from "react";
import { Box, Pagination } from '@mui/material';
import SearchOnly from '@/app/ui/Search'




const Career = () => {
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
          src="/assets/career.png"
          width={1614}
          height={1076}
          alt="banners"
          layout="responsive"
        />
        <div className="d-flex justify-content-center">
          <div className={`${styles.careerDiv} text-white text-center`}>
            <h1 className="fw-bold display-6 display-md-5 display-lg-4">Career</h1>
          </div>
        </div>

      </div>
      <Container fluid className='mt-3'>
        <Row>
          <Col>
            <h2 className={`text-primary fw-bold ${styles.montserrat}`}>Join The Team</h2>
          </Col>
          <Col>
          <SearchOnly />
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-3 mb-3'>
        <Row className='g-3'>
          <Col sm={4}>
            <JobCard />
          </Col>
          <Col sm={4}>
            <JobCard />
          </Col>
          <Col sm={4}>
            <JobCard />
          </Col>
          <Col sm={4}>
            <JobCard />
          </Col>
        </Row>
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination count={3} hidePrevButton hideNextButton color="primary"/>
        </Box>

      </Container>

    </>
  )
}

export default Career