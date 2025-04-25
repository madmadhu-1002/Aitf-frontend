"use client"

import { Container, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import VideoCard from "@/app/ui/VideoCard";
import ModificationCard from "@/app/ui/ModificationCard";
import AOS from "aos";
import Image from "next/image";


const Gallery = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState("All");

  const buttons = ["All", "Videos", "Images"];
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Container fluid className="mt-5 ps-5 pe-5">
        <h1 style={{ marginBottom: '0.3rem', fontSize: '32px', fontWeight: 500 }}>Gallery</h1>
        <Row className="mb-3 mt-4">
          <Col>
            {buttons.map((btn) => (
              <Button
                key={btn}
                variant={active === btn ? "primary" : "white"}
                onClick={() => setActive(btn)}
                className="me-2 rounded-5 px-3 py-1"
              >
                {btn}
              </Button>
            ))}
          </Col>
        </Row>
        <Row className="g-3">
          <Col xl={4} md={6}  >
            <VideoCard />
          </Col>
          <Col xl={4} md={6}  >
            <VideoCard />
          </Col>
          <Col xl={4} md={6}  >
            <VideoCard />
          </Col>
          <Col xl={4} md={6}  >
            <VideoCard />
          </Col>
          <Col xl={4} md={6}  >
            <VideoCard />
          </Col>
          <Col xl={4} md={6}  >
            <VideoCard />
          </Col>

        </Row>
        <div className="d-flex mt-4 pe-4">
          <div className="ms-auto">
            <Button className="py-1 px-4">View All</Button>
          </div>
        </div>

      </Container>
      <Container fluid className="mt-5 mb-5 ps-5 pe-5">
        <h1 style={{ marginBottom: '0.3rem', fontSize: '32px', fontWeight: 500 }}>Featured Content</h1>
        <Row data-aos="fade-up"
          data-aos-anchor-placement="center-center">
          <Col  md={4} sm={6}>
            <ModificationCard image={"/assets/image.png"} />
          </Col>
          <Col  md={4} sm={6}>
            <ModificationCard image={"/assets/modif2.png"} />
          </Col>
          <Col  md={4} sm={6}>
            <ModificationCard image={"/assets/modif3.png"} />
          </Col>
          <Col  md={4} sm={6}>
            <ModificationCard image={"/assets/modif4.png"} />
          </Col>
          <Col  md={4} sm={6}>
            <ModificationCard image={"/assets/image.png"} />
          </Col>
          <Col  md={4} sm={6}>
            <ModificationCard image={"/assets/modif2.png"} />
          </Col>
          
        </Row>
        <div className="d-flex mt-4 pe-4">
          <div className="ms-auto">
            <Button className="py-1 px-4">Load More</Button>
          </div>
        </div>
      </Container>
      <Container fluid className='bg-black text-white mt-3 mb-5'>
              <Row>
                <Col className='pt-5 ps-5' md={6}>
                  <h3>Training</h3>
                  <p className="fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="primary" className='rounded-0 px-4 py-1'>Contact Us</Button>
                    <Button variant="light" className='rounded-0 px-4 py-1'>Training</Button>
                  </div>
                </Col>
                <Col md={6}>
                  <Image
                    src="/assets/image 7.png"
                    width={583}
                    height={469}
                    alt="a car"
                    layout="responsive"
                  />
                </Col>
              </Row>
      
            </Container>
    </>
  )
}



export default Gallery