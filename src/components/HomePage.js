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

const HomePage = () => {
    const router = useRouter();
    const handleApplyClick = () => {
        router.push('/types-and-generations'); // your dynamic slug path
      };
    return (
        <>
            <Carousel />
            <Container className={styles.modificationsSection}>
                <Row>
                    <Col>
                        <div className="d-flex flex-column align-items-center mt-3">
                            <Image
                                src="/assets/vehicle-modif.png" // public folder path
                                alt="Description of image"
                                width={379}
                                height={329}
                                className="rounded-3"
                            />
                            <Button className="mt-2" onClick={handleApplyClick}>Vehicle Modifications</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="d-flex flex-column align-items-center mt-3">
                            <Image
                                src="/assets/metal-fab.png" // public folder path
                                alt="Description of image"
                                width={379}
                                height={329}
                                className="rounded-3"
                            />
                            <Button className="mt-2">Metal Fabrications</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* About Aitf */}
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Image
                            src="/assets/image 2.png" // public folder path
                            alt="Description of image"
                            width={581}
                            height={500}
                            className="rounded-3"
                        />
                    </Col>
                    <Col>
                        <h3>About AITF</h3>
                        <p>Al Ihassan Trading FZCO (AITF) is your premier destination for all automotive needs. We excel at delivering bespoke solutions tailored to our customer&apos;s unique requirements. With extensive experience and professional expertise, our dedicated design, manufacturing, supply, sales, and service teams are committed to crafting personalized solutions that meet individual needs and execute any automotive-related project with precision and excellence.
                            Furthermore, AITF designs and manufactures modified special vehicles for various OEMs and categories. Our capabilities extend to developing medical, emergency and rescue vehicles, defense and security, and industrial applications. At one of our Centers of Excellence, we meticulously engineer each product from the ground up.
                            At AITF, our unwavering commitment to excellence, innovation, and customer satisfaction drives us...</p>
                        <Button>Know More..</Button>
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
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s</Accordion.Header>
                    <Accordion.Body>
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s</Accordion.Header>
                    <Accordion.Body>
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
            
        </>
    )
}

export default HomePage