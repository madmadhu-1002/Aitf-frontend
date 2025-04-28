"use client"

import { Container, Row, Col, Form } from "react-bootstrap"
import Image from "next/image"
import styles from '@/styles/CarList.module.css'
import { useRouter } from 'next/navigation';

const cars = [
  '/assets/mercedes.png',
  '/assets/car-list-2.png',
  '/assets/car-list-3.png',
  '/assets/mercedes.png',
  '/assets/car-list-2.png',
  '/assets/car-list-3.png',
  '/assets/mercedes.png',
  '/assets/car-list-2.png',
  '/assets/car-list-3.png',
];

const modifications = [
  { name: 'Ambulances', image: '/assets/carlist1.png', width: 145, height: 75 },
  { name: 'Armoring', image: '/assets/carlist2.png', width: 165, height: 100 },
  { name: 'Commmercial', image: '/assets/carlist3.png', width: 150, height: 105 },
];
const CarList = () => {
  const router = useRouter();
  const handleApplyClick = () => {
    router.push('/car-list/mercedes'); // your dynamic slug path
  };
  return (
    <>
      <Container fluid className="mb-3 mt-3 pe-4 ps-5">

        <Row className="g-1">
          {/* Left Column */}
          <Col sm={4} className={`${styles.carListBg} me-sm-3 p-3 rounded-3 mb-5`}>
            <h2 className="fs-4 text-primary mt-4 mb-4">Vehicle Modification</h2>
            <Row className="g-2 mb-3 ">
            {modifications.map((modification, i) => (
                <Col sm={6} key={i}>
                  <div className="d-flex flex-column justify-content-center text-center h-100 bg-white rounded-3">
                    <Form.Check
                      type="checkbox"
                      id={`vehicle-check-${i}`}
                      label=""
                      className="ms-2"
                    />
                    <Image
                      src={modification.image}
                      width={modification.width}
                      height={modification.height}
                      alt="ambulance"
                      
                    />
                    <p className="fs-6 hover-text-primary p-1 mt-auto">{modification.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Column */}
          <Col className={`${styles.carListBg} rounded-3`}>
            <h2 className="ps-4 pt-4">Ambulances</h2>
            <Row className="g-2">
            {cars.map((image, i) => (
                <Col sm={4} key={i}>
                  <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 " style={{ cursor: 'pointer' }} onClick={handleApplyClick}>
                    <Image
                      src={image}
                      width={230}
                      height={146}
                      alt="mercedes"
                    />
                    <p>Mercdedes G63 AMG</p>
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