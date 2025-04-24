"use client"

import Carousel from "./Carousel";
import Accordion from 'react-bootstrap/Accordion';
import Partners from "./Partners";
import { Button, Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import styles from '@/styles/HomePage.module.css'
import Cards from "./Cards";
import Videos from "@/app/ui/Videos";
import { useRouter } from 'next/navigation';
import Faqs from "@/app/ui/Faqs";
import AOS from "aos";
import { useEffect } from "react";


const HomePage = () => {

    const router = useRouter();
    const handleApplyClick = () => {
        router.push('/types-and-generations'); // your dynamic slug path
    };
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <>
            <Carousel />
            <Container fluid className={styles.modificationsSection}>
                <Row>
                    <Col md={6}>
                        <div className="d-flex flex-column align-items-center mt-3 p-5">
                            <Image
                                src="/assets/vehicle-modif.png" // public folder path
                                alt="Description of image"
                                width={379}
                                height={329}
                                layout="responsive"
                                className="rounded-3"
                            />
                            <Button className="mt-2 bg-black ps-3 pe-3" onClick={handleApplyClick}>Vehicle Modifications</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column align-items-center mt-3 p-5" >
                            <Image
                                src="/assets/metal-fab.png" // public folder path
                                alt="Description of image"
                                width={379}
                                height={329}
                                layout="responsive"
                                className="rounded-3"
                            />
                            <Button className="mt-2 bg-black ps-3 pe-3">Metal Fabrications</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* About Aitf */}
            <Container className="mt-3" data-aos="fade-right">
                <Row>
                    <Col md={6}>
                        <div className="w-100">
                            <Image
                                src="/assets/image 2.png" // public folder path
                                alt="Description of image"
                                width={581}
                                height={500}
                                className="rounded-3"
                                layout="responsive"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <h3>About <span className="text-primary">AITF</span></h3>
                        <p><span className="text-primary">&quot;Al Ihassan Trading FZCO (AITF)</span> is your premier destination for all automotive needs. We excel at delivering bespoke solutions tailored to our customer&apos;s unique requirements. With extensive experience and professional expertise, our dedicated design, manufacturing, supply, sales, and service teams are committed to crafting personalized solutions that meet individual needs and execute any automotive-related project with precision and excellence.
                            Furthermore, AITF designs and manufactures modified special vehicles for various OEMs and categories. Our capabilities extend to developing medical, emergency and rescue vehicles, defense and security, and industrial applications. At one of our Centers of Excellence, we meticulously engineer each product from the ground up.
                            At AITF, our unwavering commitment to excellence, innovation, and customer satisfaction drives us...</p>
                        <Button className="bg-black rounded-0 ps-3 pe-3">Know More..</Button>
                    </Col>
                </Row>
            </Container>
            {/* cards */}
            <Cards />
            {/* videos */}
            <Videos />
            {/* Partners */}
            <Partners />
            {/* FAQs */}
            <div className="text-center text-primary mb-4 mt-5">
                <h3>Frequently Asked Questions</h3>
            </div>
            <Faqs />


        </>
    )
}

export default HomePage