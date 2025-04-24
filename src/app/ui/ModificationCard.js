"use client"

import { useState } from "react";

const ModificationCard = ({image}) => {
    
        const [hovered, setHovered] = useState(false);
  return (
    <>
    <div
        style={{
          borderRadius: '5px',
          overflow: 'hidden',
          boxShadow: hovered ? '0 10px 20px rgba(0, 0, 0, 0.15)' : 'none',
          transition: 'box-shadow 0.3s ease',
          background: '#fff',
          marginTop: '2rem',
          marginRight: '2rem'
        }}
        
      >
        <img
          src={image}
          alt="Audi Competition"
          style={{
            width: '100%',
            display: 'block',
          }} />
      </div>
    </>
  )
}

export default ModificationCard