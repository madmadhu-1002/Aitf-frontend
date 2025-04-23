import React from 'react'
import styles from '@/styles/Career.module.css'
import JobCard from '@/app/ui/JobCard'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'


const Career = () => {
  return (
    <>
      <div className="min-w-full flex-shrink-0 position-relative ">
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
      </Container>

    </>
  )
}

export default Career