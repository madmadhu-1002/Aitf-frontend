"use client"

import { Container, Row, Col, Form, Button } from "react-bootstrap"
import Image from "next/image"
import styles from '@/styles/CarList.module.css'
import AccessoryCard from "@/app/ui/AccessoryCard"
import { Box, Pagination } from '@mui/material';
import { FaSearch } from 'react-icons/fa';


const Accessories = () => {

    return (
        <>
            <div className="min-w-full flex-shrink-0 position-relative py-4 ">
                <Image
                    src="/assets/image 51.png"
                    width={1614}
                    height={1076}
                    alt="banners"
                    layout="responsive"
                />


            </div>
            <Container fluid className="mb-5 mt-3 ps-4 pe-4 pb-5">
                <Row className="mb-3 mt-5">
                    <Col>
                        <Form className={`d-flex ms-auto ${styles.customSearchBar}`}>
                            <Form.Control
                                type="text"
                                placeholder="Search by role"
                                className={styles.searchInput}
                                aria-label="Search"
                            />
                            <Button className={styles.searchButton} >
                                <FaSearch className={`${styles.me1} text-black `} />
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="g-0">
                    {/* Left Column */}
                    <Col sm={3} className="me-sm-3 pb-5">
                        <Row className={`${styles.carListBg} g-2 p-2 rounded-3`}>
                        <h3 className="text-primary fs-5 pt-4 py-3">Vehicle Modification</h3>
                            <Col lg={6} >
                                <div className="d-flex rounded-2 flex-column justify-content-center p-0 text-center h-100 bg-white" >
                                    <Form.Check
                                        type="checkbox"
                                        id="1"
                                        label=""
                                        className="mb-2 ms-2"
                                    />
                                    <Image
                                        src="/assets/Mercedes-G-63-Menu 1.png"
                                        width={165}
                                        height={100}
                                        alt="4wd Recovery & Safety"
                                    />
                                    <p className="fs-6 hover-text-primary mt-auto">4wd Recovery & Safety</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-flex p-0  rounded-2 flex-column justify-content-center text-center h-100 bg-white">
                                    <Form.Check
                                        type="checkbox"
                                        id="2"
                                        label=""
                                        className="mb-2 ms-2"
                                    />
                                    <Image
                                        src="/assets/recovery-safety.png"
                                        width={128}
                                        height={97}
                                        alt="4wd Recovery & Safety"
                                    />
                                    <p className="fs-6 hover-text-primary">4wd Recovery & Safety</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-flex p-0  rounded-2 flex-column justify-content-center text-center h-100 bg-white">
                                    <Form.Check
                                        type="checkbox"
                                        id="3"
                                        label=""
                                        className="mb-2 ms-2"
                                    />
                                    <Image
                                        src="/assets/modif5.png"
                                        width={165}
                                        height={100}
                                        alt="4wd Recovery & Safety"
                                    />
                                    <p className="fs-6 hover-text-primary">4wd Recovery & Safety</p>
                                </div>
                            </Col>
                            <Col lg={6} >
                                <div className="d-flex p-0  rounded-2 flex-column justify-content-center text-center h-100 bg-white">
                                    <Form.Check
                                        type="checkbox"
                                        id="4"
                                        label=""
                                        className="mb-2 ms-2"
                                    />
                                    <Image
                                        src="/assets/Mercedes-G-63-Menu 1.png"
                                        width={145}
                                        height={65}
                                        alt="4wd Recovery & Safety"
                                    />
                                    <p className="fs-6 hover-text-primary">4wd Recovery & Safety</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-flex p-0  rounded-2 flex-column justify-content-center text-center h-100 bg-white">
                                    <Form.Check
                                        type="checkbox"
                                        id="5"
                                        label=""
                                        className="mb-2 ms-2"
                                    />
                                    <Image
                                        src="/assets/recovery-safety.png"
                                        width={145}
                                        height={65}
                                        alt="4wd Recovery & Safety"
                                    />
                                    <p className="fs-6 hover-text-primary">4wd Recovery & Safety</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="d-flex p-0  rounded-2 flex-column justify-content-center text-center h-100 bg-white">
                                    <Form.Check
                                        type="checkbox"
                                        id="6"
                                        label=""
                                        className="mb-2 ms-2"
                                    />
                                    <Image
                                        src="/assets/modif5.png"
                                        width={145}
                                        height={65}
                                        alt="4wd Recovery & Safety"
                                    />
                                    <p className="fs-6 hover-text-primary">4wd Recovery & Safety</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    {/* Right Column */}
                    <Col className="pb-5">
                        <Row className="g-3">
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/image 41.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/accessory2.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/accessory4.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/image 41.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/accessory2.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/accessory4.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/image 41.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/accessory2.png"} newArrival={true}/>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="p-0">
                                <AccessoryCard image={"/assets/accessory4.png"} newArrival={true}/>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Box display="flex" justifyContent="end" mt={4}>
                    <Pagination count={3} color="primary" />
                </Box>
            </Container>
        </>
    )
}

export default Accessories