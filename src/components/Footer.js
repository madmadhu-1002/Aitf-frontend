"use client"

import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';
import styles from '@/styles/Footer.module.css'
import Link from "next/link";
import { useState } from "react";
import { LuBell } from "react-icons/lu";


const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://admin.gulfgreatsands.com/api/saveTheSubscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("Subscribed successfully!");
                setEmail("");
            } else {
                setMessage(data.message || "Subscription failed.");
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }
    };
    return (
        <>
            <Container fluid>
                <Row className={styles.footer} >
                    <Col md={8}>
                        <Row >
                            <Col className="mb-3 border-bottom border-white pt-4" xs={12}>
                                <h3 className="fs-4 w-75 mb-4">Possibilities Unlimited. <span className="text-primary">One Stop</span> Custom Custom Modifications Hub</h3>
                            </Col>
                            <Col>
                                <Row>
                                    <Col md={5} sm={12}>
                                        <h3>About us</h3>
                                        <p>Al Ihassan Trading Fzco. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution that meet individual requirement and undertake any Automobile related projects.</p>
                                        <p>© Copyright AITF 2025. All rights reserved.</p>
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <h3>Contact info</h3>
                                        <p>Dubai Industrial City, Dubai, UAE</p>
                                        <a href="mailto:info@aitf-me.com">info@aitf-me.com</a>
                                        <p><a href="tel:+971506350201">+971 50 635 0201</a> / <a href="tel:+971504813254">+971 50 481 3254</a></p>
                                    </Col>
                                    <Col md={3} sm={12}>
                                        <h3>Explore</h3>
                                        <nav className="nav flex-column fs-6">
                                            <Link href="/" className="nav-link p-1">Home</Link>
                                            <Link href="/about-us" className="nav-link p-1">About Us</Link>
                                            <Link href="/support-projects" className="nav-link p-1">Support & Projects</Link>
                                            <Link href="/gallery" className="nav-link p-1">Gallery</Link>
                                            <Link href="/career" className="nav-link p-1">Career</Link>
                                            <Link href="/contact-us" className="nav-link p-1">Contact Us</Link>
                                        </nav>

                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                    <div className="mt-5">
                        <h3>News Letter</h3>
                        <Form onSubmit={handleSubscribe} className="email-form">
                            <div className="email-input-wrapper">
                                <input
                                    type="email"
                                    className="email-input"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="email-button">
                                    <LuBell size={24} /> Subscribe
                                </button>
                            </div>
                        </Form>
                        {message && <p className="mt-2">{message}</p>}
                        <p className="fs-6 mt-3">Subscribe to newsletter and promotions</p>
                        <div className="d-flex align-items-center gap-3 fs-6">
  <span className="fw-semibold">Follow Us On</span>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer