"use client"

import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import styles from '@/styles/CarList.module.css'
import AccessoryCard from "@/app/ui/AccessoryCard"


const Accessories = () => {
    
    return (
        <>
        <div className="min-w-full flex-shrink-0 position-relative ">
        <Image
          src="/assets/image 51.png"
          width={1614}
          height={1076}
          alt="banners"
          layout="responsive"
        />
        

      </div>
            <Container fluid className="mb-3 mt-3">

                <Row className="g-3">
                    {/* Left Column */}
                    <Col sm={3} className={`${styles.carListBg} me-sm-3`}>
                        <h3 className="text-primary fs-4">Vehicle Modifications</h3>
                        <Row className="g-2">
                            {[...Array(3)].map((_, i) => (
                                <Col lg={6} key={i}>
                                    <div className="d-flex rounded-2 flex-column align-items-center justify-content-center text-center h-100 bg-white">
                                        <Image
                                            src="/assets/recovery-safety.png"
                                            width={145}
                                            height={65}
                                            alt="4wd Recovery & Safety"
                                        />
                                        <p className="fs-6">4wd Recovery & Safety</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* Right Column */}
                    <Col className={styles.carListBg}>
                        <Row className="g-2">
                            {[...Array(3)].map((_, i) => (
                                <Col lg={4} md={6} xs={12} key={i}>
                                    <AccessoryCard />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Accessories