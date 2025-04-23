"use client"

import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import styles from '@/styles/CarList.module.css'
import { useRouter } from 'next/navigation';

const CarList = () => {
  const router = useRouter();
  const handleApplyClick = () => {
    router.push('/car-list/mercedes'); // your dynamic slug path
  };
  return (
    <>
    <Container fluid className="mb-3 mt-3 pe-4 ps-5">
        
    <Row className="g-3">
  {/* Left Column */}
  <Col sm={4} className={`${styles.carListBg} me-sm-3`}>
    <h2 className="fs-4 text-primary mt-4 mb-4">Vehicle Modification</h2>
    <Row className="g-2 mb-3 ">
      {[...Array(3)].map((_, i) => (
        <Col sm={6} key={i}>
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-white rounded-2">
            <Image
              src="/assets/ambulance1.png"
              width={145}
              height={65}
              alt="ambulance"
            />
            <p className="fs-6">Ambulances</p>
          </div>
        </Col>
      ))}
    </Row>
  </Col>

  {/* Right Column */}
  <Col className={styles.carListBg}>
    <h2 className="ps-4 pt-4">Ambulances</h2>
    <Row className="g-2">
      {[...Array(3)].map((_, i) => (
        <Col sm={4} key={i}>
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 " style={{ cursor: 'pointer' }} onClick={handleApplyClick}>
            <Image
              src="/assets/mercedes.png"
              width={230}
              height={146}
              alt="mercedes"
            />
            <p>mercedes</p>
          </div>
        </Col>
      ))}
    </Row>
  </Col>
</Row>
    </Container>
    </>
  )
}

export default CarList