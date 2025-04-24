"use client"

import React from 'react'
import styles from '@/styles/Career.module.css'
import JobCard from '@/app/ui/JobCard'
import { Container, Row, Col, Button , Form} from 'react-bootstrap'
import Image from 'next/image'
import AOS from "aos";
import { useEffect } from "react";
import { Box, Pagination } from '@mui/material';
import SearchOnly from '@/app/ui/Search'
import { FaSearch } from 'react-icons/fa'; 
import { LuSettings2 } from "react-icons/lu";




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
          width={1503}
          height={459}
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
          <Col className="d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center gap-3">
          <Form className={`d-flex ${styles.customSearchBar}`}>
          <Form.Control
            type="text"
            placeholder="Search by role"
            className={styles.searchInput}
            aria-label="Search"
          />
          <Button className={styles.searchButton } >
            <FaSearch className={`${styles.me1} text-black`} /> 
          </Button>
        </Form>
        <p className="mb-0 d-flex align-items-center gap-1">Filter <LuSettings2 /></p>
        </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-3 mb-3'>
        <Row className='g-3'>
          <Col lg={4} md={6}>
            <JobCard />
          </Col>
          <Col lg={4} md={6}>
            <JobCard />
          </Col>
          <Col lg={4} md={6}>
            <JobCard />
          </Col>
          <Col lg={4} md={6}>
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