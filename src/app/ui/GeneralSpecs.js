import React, { useState } from 'react';

const GeneralSpecs = () => {
  const [activeTab, setActiveTab] = useState('general');

  const specData = {
    general: [
      { label: 'Engine', value: '3.0L V6 Twin - Turbo' },
      { label: 'Power', value: '450 HP' },
      { label: 'Torque', value: '600 Nm' },
      { label: 'Transmission', value: 'Automatic 9-speed' },
      { label: 'Drive Type', value: 'AWD' },
      { label: 'Top Speed', value: '250 km/h' },
      { label: 'Engine Type', value: 'Petrol' }
    ],
    interior: [
      { label: 'Seats', value: 'Leather, Ventilated' },
      { label: 'Infotainment', value: '12" Touchscreen' },
      { label: 'Sound System', value: 'Burmester Surround' },
      { label: 'Airbags', value: '8 Airbags' },
      { label: 'Climate Control', value: '4-zone automatic' }
    ],
    exterior: [
      { label: 'Wheels', value: '20-inch Alloy' },
      { label: 'Lighting', value: 'LED Matrix Headlamps' },
      { label: 'Sunroof', value: 'Panoramic Electric' },
      { label: 'Roof Rails', value: 'Matte Black Finish' }
    ],
    conversion: [
      { label: 'Fuel Type Conversion', value: 'Petrol to Hybrid' },
      { label: 'Suspension Upgrade', value: 'Air Suspension' },
      { label: 'Armouring', value: 'Optional B6/B7' },
      { label: 'Seating Layout', value: 'Custom VIP Recliners' }
    ]
  };

  const renderSpecs = () => {
    const specs = specData[activeTab] || [];
    return (
      <table style={styles.table}>
        <tbody>
          {specs.map((spec, i) => (
            <tr key={i} style={styles.row}>
              <td style={styles.key}>{spec.label}</td>
              <td style={styles.value}>{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div style={styles.wrapper}>
      <h2 className='fw-bold'>Lorem Ipsum</h2>
      <p style={styles.description} >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      

      <div style={styles.tableBox}>
      <div style={styles.tabContainer} className='ms-auto me-auto'>
        {['general', 'interior', 'exterior', 'conversion'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
          >
            {tab === 'general' && 'General Specifications'}
            {tab === 'interior' && 'Interior features & safety'}
            {tab === 'exterior' && 'Exterior features'}
            {tab === 'conversion' && 'Conversion features'}
          </button>
        ))}
      </div>
        {renderSpecs()}
        </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '30px',
    fontFamily: 'sans-serif'
  },
  heading: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#0A1A38'
  },
  description: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#1E1E1E',
    margin: '10px 0 30px 0',
  },
  tabContainer: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    marginBottom: '20px',
     justifyContent: 'center',
  },
  tab: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '50px',
    background: '#fff',
    color: '#000',
    fontWeight: '600',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  activeTab: {
    background: '#0071FF',
    color: '#fff',
    fontWeight: 'bold',
    fontWeight: '600',
    fontSize: '15px'
  },
  tableBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  table: {
    width: '50%',
    borderCollapse: 'collapse'
  },
  row: {
    borderBottom: '1px solid #707070'
  },
  key: {
    padding: '12px 0',
    fontWeight: '500',
    color: '#000',
    fontWeight: '600',
    fontSize: '14px'
  },
  value: {
    padding: '12px 0',
    textAlign: 'right',
    color: '#666',
    fontWeight: '500',
    fontSize: '14px'
  }
};

export default GeneralSpecs;
