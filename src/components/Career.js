"use client"

import React from 'react'
import styles from '@/styles/Career.module.css'
import JobCard from '@/app/ui/JobCard'
import { Container, Row, Col, Button , Form, InputGroup} from 'react-bootstrap'
import Image from 'next/image'
import AOS from "aos";
import { useEffect } from "react";
import { Box, Pagination } from '@mui/material';
import { FaSearch } from 'react-icons/fa'; 
import { LuSlidersHorizontal } from "react-icons/lu";




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
      <Container fluid className={`${styles.carListBg} px-5 py-4`}>
      <Row className="align-items-center justify-content-between">
          {/* Left: Heading */}
          <Col xs="auto">
            <h2 className="fw-bold m-0" style={{ color: '#0056A8', fontSize: '40px', fontWeight: 700 }}>Join The Team</h2>
          </Col>

          {/* Right: Search + Filter */}
          <Col xs="auto" className="d-flex align-items-center gap-3">
            {/* Search Box */}
            <InputGroup className="rounded-pill overflow-hidden" style={{ border: '1px solid #048EFF', color:'#505050', fontSize:'14px', fontWeight:500 }}>
              <Form.Control
                type="text"
                placeholder="Search by role.."
                className="border-0 shadow-none ps-3"
                style={{ minWidth: '240px' }}
              />
              <Button variant="light" className="border-0 pe-3">
                <FaSearch style={{color:'#505050', fontSize:'20px', paddingBottom:'5px'}} />
              </Button>
            </InputGroup>


            {/* Filter Icon */}
            <span className=" d-flex align-items-center" style={{ fontSize:'16px', color:'#6C6C6C', fontWeight:500 }}>
              Filter <LuSlidersHorizontal className="text-black ms-2 fs-5" />
            </span>

          </Col>
        </Row>
      </Container>
      <Container fluid className={`${styles.carListBg} mb-3 px-5 pb-5`}>
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