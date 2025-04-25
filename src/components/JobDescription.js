"use client"

import { useState } from 'react';
import styles from '@/styles/JobDescription.module.css'
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import AOS from "aos";
import { useEffect } from "react";

const JobDescription = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company_name: '',
    job_title: '',
  });
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("jobs_id", "0");
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("company_name", formData.company_name);
    data.append("job_title", formData.job_title);
    data.append("is_checked", "1");

    if (resume) {
      data.append("resume", resume);
    }

    try {
      await axios.post("https://admin.gulfgreatsands.com/api/applyJobs", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setSubmitted(true);
      setError('');
    } catch (err) {
      console.error("Form submission failed:", err);
      setError("Something went wrong while submitting your application. Please try again later.");
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
              src="/assets/career.png"
              width={1614}
              height={1076}
              alt="banners"
              layout="responsive"
            />
            <div className="d-flex justify-content-center">
              <div className={`${styles.careerDiv} text-white text-center`}>
                <h1 className="fw-bold display-6 display-md-5 display-lg-4">Career</h1>
              </div>
            </div>
    
          </div>
      <Container fluid className={`p-5 ${styles.careerWrapper}`}>
        <Row>
          <Col md={6}>
            <h2 className="text-primary fw-bold fs-3">Graphic Designers <span className="text-muted fs-5 ps-4">Hyderabad</span></h2>
            <p>Software Engineering Project</p>
            <p><strong className='text-primary'>Role:</strong> Design great visual and impacted the website.</p>
            <p><strong className='text-primary'>Business Area:</strong> Corporate Business Communication</p>
            <p><strong className='text-primary'>Experience:</strong> 3-5 years</p>
            <p>
              <strong className='text-primary'>Job Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
          </Col>
          <Col md={6}>
          <div className='w-75 ps-5 ms-auto'>
            <Image
              src="/assets/image 11.png"
              width={470}
              height={311}
              alt="join our team"
              layout="responsive"
            />
            </div>
          </Col>
        </Row>
        {/* Form Section */}
        <Row>
          <Col sm={6}>
            {!submitted ? (
              <form className="row g-3 mt-4" onSubmit={handleSubmit} encType="multipart/form-data">
                <h4 className="text-primary fs-2">Submit Your Application <span className="d-block border-bottom border-primary mt-1 w-50" ></span></h4>
                
                <div className="col-md-6">
                  <TextField id="standard-basic" label="First Name" variant="standard" name="first_name" className="form-control" required onChange={handleChange} sx={{ backgroundColor: '#F6F6F6' }} />

                </div>
                <div className="col-md-6">
                  <TextField id="standard-basic" label="Last Name" variant="standard" name="last_name" className="form-control" required onChange={handleChange} sx={{ backgroundColor: '#F6F6F6' }} />
                </div>

                <div className="col-md-6">
                  <TextField id="standard-basic" label="Email" variant="standard" name="email" className="form-control" required onChange={handleChange} sx={{ backgroundColor: '#F6F6F6' }} />

                </div>
                <div className="col-md-6">
                  <TextField id="standard-basic" label="Phone Number" variant="standard" name="phone" className="form-control" required onChange={handleChange} sx={{ backgroundColor: '#F6F6F6' }} />
                </div>

                <div className="col-md-6">
                  <TextField id="standard-basic" label="Company Name" variant="standard" name="company_name" className="form-control" required onChange={handleChange} sx={{ backgroundColor: '#F6F6F6' }} />
                </div>
                <div className="col-md-6">
                  <TextField id="standard-basic" label="Job Title" variant="standard" name="job_title" className="form-control" required onChange={handleChange} sx={{ backgroundColor: '#F6F6F6' }} />
                </div>

                <div className="col-md-6">
                  <label className="form-label">CV (Docx or PDF)</label>
                  <input type="file" className="form-control" accept=".pdf,.doc,.docx" onChange={handleFileChange} required style={{ backgroundColor: '#F6F6F6' }}/>
                </div>

                <div className="col-md-6 d-flex justify-content-end align-items-center">
                  <button type="submit" className="btn btn-primary px-5 rounded-5">Submit</button>
                </div>
              </form>

            ) : (
              <div className="text-success mt-4">
                <h5>Thank you! Your application has been submitted successfully.</h5>
              </div>
            )}
          </Col>
        </Row>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}


      </Container>
    </>
  )
}

export default JobDescription