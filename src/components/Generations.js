"use client"

import Image from "next/image";
import { Button, Row, Container, Col } from "react-bootstrap";
import styles from "@/styles/Generations.module.css"
import { useRouter } from 'next/navigation';

const Generations = () => {
    const router = useRouter();
    const handleApplyClick = () => {
        router.push('/car-list'); // your dynamic slug path
      };
    return (
        <>
        <Container fluid className={styles.ambulance}>
            <Row className="h-100">
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">Ambulance</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div className="mt-auto">
                <Image
                    src="/assets/ambulance1.png"
                    width={1920}
                    height={860}
                    alt="ambulance"
                    layout="responsive"
                    
                />
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.armoring}>
            <Row className="h-100">
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">Armoring</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div>
                <Image
                    src="/assets/armoring.png"
                    width={1920}
                    height={860}
                    alt="armor"
                    layout="responsive"
                    
                />
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.commercial}>
            <Row className="h-100">
                
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div>
                <Image
                    src="/assets/commercial.png"
                    width={1920}
                    height={860}
                    alt="commercial"
                    layout="responsive"
                    
                />
                </div>
                </Col>
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">Commercial & Multiutility Vehicles</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.defence}>
            <Row className="h-100">
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">Defence Vehicles</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div>
                <Image
                    src="/assets/defence.png"
                    width={1920}
                    height={860}
                    alt="defence"
                    layout="responsive"
                    
                />
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.mining}>
            <Row className="h-100">
                
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div>
                
                </div>
                </Col>
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">Mining Vehicles</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.mobile}>
            <Row className="h-100">
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">Mobile Workshop</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div>
                <Image
                    src="/assets/mobile.png"
                    width={1920}
                    height={860}
                    alt="mobile workshop"
                    layout="responsive"
                    
                />
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.police}>
            <Row className="h-100">
                
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div>
                <Image
                    src="/assets/police.png"
                    width={1920}
                    height={860}
                    alt="police"
                    layout="responsive"
                    
                />
                </div>
                </Col>
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">Police Vehicles</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.vip}>
            <Row className="h-100">
                
                <Col sm={6} className="d-flex flex-column justify-content-end">
                <div>
                <Image
                    src="/assets/vip-conversion.png"
                    width={1920}
                    height={860}
                    alt="vip conversion"
                    layout="responsive"
                    
                />
                </div>
                </Col>
                <Col sm={6} className="d-flex align-items-center">
                <div className={`${styles.carouselDiv} ms-2 text-white`} >
                    <h2 className="fw-bold display-6 display-md-5 display-lg-4">VIP Conversion</h2>
                    <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
                    <Button variant="outline-light" onClick={handleApplyClick}>Explore More</Button>
                </div>
                </Col>
            </Row>
        </Container>
        
            
        </>
    )
}

export default Generations