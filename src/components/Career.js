import React from 'react'
import styles from '@/styles/Career.module.css'
import JobCard from '@/app/ui/JobCard'
import {Container, Row, Col} from 'react-bootstrap'


const Career = () => {
  return (
    <>
    <div className={styles.careerBg}><h1 className={styles.careerText}>Career</h1></div>
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