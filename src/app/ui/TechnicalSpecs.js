"use client"

const TechicalSpecs = () => {
    return (
        <>
            <div style={styles.rightSection}>
                <h3 style={styles.title}>Technical Specifications</h3>
                <table style={styles.table}>
                <tbody>
                    {[
                        'Engine',
                        'Power',
                        'Torque',
                        'Transmission',
                        'Drive Type',
                        'Top Speed',
                        'Engine Type'
                    ].map((spec, i) => (
                        <tr key={i} style={styles.row}>
                            <td style={styles.key}>{spec}</td>
                            <td style={styles.value}>3.0L V5 Twin - Turbo</td>
                        </tr>
                    ))}
                     </tbody>
                </table>

                <div style={styles.buttonGroup}>
                    <button style={styles.contactBtn}>Contact Us</button>
                    <button style={styles.brochureBtn}>Download Brochure</button>
                </div>
            </div>
        </>
    )
}

const styles = {
    container: {
      display: 'flex',
      gap: '30px',
      padding: '30px',
      fontFamily: 'sans-serif',
      alignItems: 'flex-start'
    },
    leftSection: {
      flex: 1,
      textAlign: 'center'
    },
    mainImageWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mainImage: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '10px'
    },
    navBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '20px',
      fontWeight: 'bold',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      padding: '5px 10px',
      cursor: 'pointer',
      zIndex: 2
    },
    thumbnailContainer: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px',
      justifyContent: 'center'
    },
    thumbnail: {
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '5px',
      cursor: 'pointer',
      border: '1px solid #ccc'
    },
    rightSection: {
      flex: 1,
      background: '#fff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    title: {
      marginBottom: '20px',
      fontSize: '18px',
      fontWeight: '600'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px'
    },
    row: {
      borderBottom: '1px solid #e0e0e0'
    },
    key: {
      padding: '10px 0',
      fontWeight: '600',
      fontSize: '16px'
    },
    value: {
      padding: '10px 0',
      textAlign: 'right',
      color: '#666',
      fontWeight: '500',
      fontSize: '14px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px',
      marginTop: '10px'
    },
    contactBtn: {
      flex: 1,
      backgroundColor: '#0071FF',
      color: '#fff',
      padding: '12px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '16px'
    },
    brochureBtn: {
      flex: 1,
      backgroundColor: '#000',
      color: '#fff',
      padding: '12px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '16px'
    }
  };

export default TechicalSpecs