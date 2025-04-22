"use client"

import { useState } from 'react';
import styles from '@/styles/JobDescription.module.css'
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

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
        } catch (err) {
          console.error("Form submission failed:", err);
        }
      };
    return (
        <>
            <Container fluid className={`py-5 ${styles.careerWrapper}`}>
                <Row>
                    <Col>
                        <h2 className="text-dark fw-bold fs-3">Graphic Designers <span className="text-muted fs-5">Hyderabad</span></h2>
                        <p><strong>Software Engineering Project</strong></p>
                        <p><strong>Role:</strong> Design great visual and impacted the website.</p>
                        <p><strong>Business Area:</strong> Corporate Business Communication</p>
                        <p><strong>Experience:</strong> 3-5 years</p>
                        <p>
                            <strong>Job Description:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                    </Col>
                    <Col>
                        <Image
                            src="/assets/image 11.png"
                            width={470}
                            height={311}
                            alt="join our team"
                            layout="responsive"
                        />
                    </Col>
                </Row>


                {/* Form Section */}
                {!submitted ? (
        <form className="row g-3 mt-4" onSubmit={handleSubmit} encType="multipart/form-data">
          <h4 className="text-primary">Submit Your Application</h4>

          <div className="col-md-6">
            <input type="text" name="first_name" className="form-control" placeholder="First Name" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <input type="text" name="last_name" className="form-control" placeholder="Last Name" required onChange={handleChange} />
          </div>

          <div className="col-md-6">
            <input type="email" name="email" className="form-control" placeholder="Email" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required onChange={handleChange} />
          </div>

          <div className="col-md-6">
            <input type="text" name="company_name" className="form-control" placeholder="Company Name" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <input type="text" name="job_title" className="form-control" placeholder="Job Title" onChange={handleChange} />
          </div>

          <div className="col-md-12">
            <label className="form-label">CV (Docx or PDF)</label>
            <input type="file" className="form-control" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary px-4">Submit</button>
          </div>
        </form>
      ) : (
        <div className="text-success mt-4">
          <h5>Thank you! Your application has been submitted successfully.</h5>
        </div>
      )}
            </Container>
        </>
    )
}

export default JobDescription