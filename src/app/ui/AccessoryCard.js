"use client"

import { useState } from "react"
import { Container, } from "react-bootstrap"

import { useRouter } from 'next/navigation';

const AccessoryCard = () => {
    const router = useRouter();
    const [hovered, setHovered] = useState(false);
    

  const handleApplyClick = () => {
    router.push('/accessories/roof-top'); // your dynamic slug path
  };
    return (
        <>
            <Container className="mt-5">

                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        
                        borderRadius: '12px',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        boxShadow: hovered ? '0 10px 20px rgba(0,0,0,0.15)' : '0 0 0 rgba(0,0,0,0)',
                        transition: 'box-shadow 0.3s ease-in-out',
                        fontFamily: 'Arial, sans-serif',
                        border: '1px solid #d4d4d4'
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        <img
                            src="/assets/image 41.png"
                            alt="Tent on Car"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                transform: hovered ? 'scale(1.03)' : 'scale(1)',
                                transition: 'transform 0.3s ease-in-out'
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: '#FFCC00',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                fontWeight: '600',
                                fontSize: '14px'
                            }}
                        >
                            New Arrivals
                        </div>
                    </div>

                    <div style={{ padding: '1rem' }}>
                        <p style={{ fontSize: '12px', fontWeight: '600', color: '#8c8c8c', marginBottom: '4px' }}>
                            4wd Recovery & Safety <span style={{ float: 'right', color: 'green' }}>In Stock</span>
                        </p>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '6px 0' }}>
                            The roof top tent provides sleeping quarters off
                        </h4>

                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                            <span style={{ color: '#FACC15', fontSize: '16px', marginRight: '4px' }}>★★★★★</span>
                            <span style={{ fontSize: '14px', color: '#555' }}>
                                <strong style={{ color: '#000' }}>4.8</strong> (2,439)
                            </span>
                        </div>

                        <h3 style={{ margin: '0 0 1rem 0', fontSize: '20px', fontWeight: '600' }}>150 AED</h3>

                        <button
                            style={{
                                width: '100%',
                                padding: '10px 0',
                                backgroundColor: '#008AFB',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                            onClick={handleApplyClick}
                        >
                            Explore More
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AccessoryCard