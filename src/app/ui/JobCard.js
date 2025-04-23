"use client"

import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const JobCard = () => {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push('/career/graphic-designer'); // your dynamic slug path
  };
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.title}>Graphic Designers</span>
        <span style={styles.location}> | Hyderabad</span>
      </div>
 
      <p style={styles.project}>Software Engineering Project</p>
 
      <p className='mt-1' style={styles.p}>
        <strong style={styles.label}>Role: </strong>
        Design great visual and impacted the website..
      </p >
      <p className='mt-1' style={styles.p}>
        <strong style={styles.label}>Business Area: </strong>
        Corporate Business Communication
      </p>
      <p className='mt-1' style={styles.p}>
        <strong style={styles.label}>Experience: </strong>
        3-5 years
      </p>
 
      <div style={styles.footer}>
        <span style={styles.posted}>Posted 2 days ago</span>
        <div style={styles.actions}>
          <FaShareAlt style={{ color: '#0096ff', marginRight: '10px' }} />
          <button style={styles.button} onClick={handleApplyClick}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};
 
const styles = {
  card: {
    padding: '15px',
    border: '1px solid #e0e0e0',
    borderTop:'5px solid #0056A8',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: '5px',
  },
  title: {
    color: '#0056A8',
    fontWeight: '700',
    fontSize: '24px',
  },
  location: {
    color: '#666',
    fontWeight: '500',
    fontSize: '20px',
    paddingLeft:'30px'
  },
  project: {
    fontWeight: '500',
    fontWeight: '500',
    fontSize: '16px',
  },
  p: {
    margin: '0px',
    padding:'0px',
    fontWeight: '500',
    fontSize: '16px',
  },
  label: {
    color: '#0056A8',
    fontWeight: '500',
    fontSize: '16px',
  },
  footer: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  posted: {
    color: '#aaa',
    fontSize: '12px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    color: '#048EFF',
    border: '1px solid #048EFF',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '13px',
    cursor: 'pointer',
  },
};
 
export default JobCard;