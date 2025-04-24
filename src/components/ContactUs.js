"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';
import styles from '@/styles/ContactUs.module.css';
import AOS from "aos";
import { useEffect } from "react";

const cards = [
  {
    image: "/assets/image 52.png", // Replace with actual image path
    title: "Visit Our Showroom",
    text: "AutoFix Multibrand Car Service Center - DIC, Dubai Industrial City - Dubai - United Arab Emirates",
  },
  {
    image: "/assets/image 23 (1).png", // Replace with actual image path
    title: "Call Us",
    text: "Services\n+971 50 635 0201 / +971 50 4813254",
  },
  {
    image: "/assets/image 52.png",
    title: "Visit Our Showroom",
    text: "AutoFix Multibrand Car Service Center - DIC, Dubai Industrial City - Dubai - United Arab Emirates",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    job_title: "",
    email: "",
    address: "",
    message: "",
    is_checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      is_checked: formData.is_checked ? 1 : 0,
    };

    try {
      const res = await fetch("https://admin.gulfgreatsands.com/api/saveTheGetInTouch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert("Message sent successfully!");
      console.log(data);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was a problem submitting your message.");
    }
  };
  useEffect(() => {
          AOS.init({
            duration: 1000, // animation duration
            once: true,     // whether animation should happen only once
          });
        }, []);
  return (
    <>


      <div className="min-w-full flex-shrink-0 position-relative " data-aos='zoom-in'>
        <Image
          src="/assets/image 51.png"
          width={1614}
          height={1076}
          alt="banners"
          layout="responsive"
        />
        <div className="d-flex justify-content-center">
          <div className={`${styles.contactDiv} text-white text-center`}>
            <h1 className={`${styles.textFontMd} fw-bold display-6 display-md-5 display-lg-4`}>Get In Touch</h1>
            <p className={`${styles.textFontMd} fs-6 fs-md-5 fs-lg-4`}>We&rsquo;re here to help with all your automotive needs</p>
          </div>
        </div>

      </div>
      <Container fluid className='mt-3 w-100'>
        <Row>
          <Col sm={6}  data-aos='fade-right'>
            <div >
              <h3>
                Contact Us
              </h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
              <h3>Follow us</h3>
              <div style={{ display: 'flex', gap: '10px', fontSize: '1.5rem' }}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              </div>
            </div>
            <div>
              <Image
                src="/assets/BESTUNE T77 1.png"
                width={532}
                height={314}
                alt="yellow car"
                layout="responsive"
              />
            </div>
          </Col>
          <Col data-aos='zoom-in'>
            <div className="p-4 bg-white shadow rounded" style={{  margin: "0 auto" }}>
              <h4 className="mb-4 fw-bold">Send Us a message</h4>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="firstName">
                      <Form.Control type="text" name="first_name" value={formData.first_name}
                      onChange={handleChange} placeholder="First Name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="lastName">
                      <Form.Control type="text" name="last_name"
                      value={formData.last_name}
                      onChange={handleChange} placeholder="Last Name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="jobTitle">
                      <Form.Control type="text" name="job_title"
                      value={formData.job_title}
                      onChange={handleChange} placeholder="Job Title" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="email">
                      <Form.Control type="email" name="email"
                      value={formData.email}
                      onChange={handleChange} placeholder="Email ID" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="address" className="mb-3">
                  <Form.Control type="text" name="address"
                    value={formData.address}
                    onChange={handleChange} placeholder="Address" />
                </Form.Group>

                <Form.Group controlId="message" className="mb-3">
                  <Form.Control as="textarea" rows={4} name="message"
                    value={formData.message}
                    onChange={handleChange} placeholder="Message" />
                </Form.Group>

                <Form.Group controlId="privacy" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    name="is_checked"
                    checked={formData.is_checked}
                    onChange={handleChange}
                    label="I agree to the privacy statement and understand how my personal data will be processed."
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Get In touch
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
      <Row className="justify-content-center g-4">
        {cards.map((card, index) => (
          <Col key={index} md={4} sm={6} data-aos='flip-left'>
            <Card className={`${styles.customCard} shadow-sm border-0`}>
              <Image
                src={card.image}
                width={356}
                height={278}
                className=' rounded-top-4'
                layout='responsive'
                alt={card.title}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{card.title}</Card.Title>
                <Card.Text style={{ whiteSpace: "pre-line" }}>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    </>

  )
}

export default ContactUs