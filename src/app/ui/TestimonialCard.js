import React from 'react'

const TestimonialCard = () => {
  return (
    <>
      <div style={styles.wrapper}>
        <div style={styles.card} data-aos="flip-left">
          <div style={styles.header}>
            <div style={styles.userInfo}>
              <div style={styles.avatar}>
                <img
                  src="/assets/avatar.png"
                  alt="User Avatar"
                  style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
              </div>
              <span style={styles.name}>Sam Johnson</span>
            </div>
            <div style={styles.stars}>
              {'⭐️⭐️⭐️⭐️⭐️'}
            </div>
          </div>
          <p style={styles.reviewText}>
            Highly recommend for car<br />enthusiasts
          </p>
        </div>
      </div>
    </>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%', // optional if you want vertical centering also
  },
  card: {
    border: '1px solid #d4d4d4',
    borderRadius: '5px',
    padding: '16px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
    maxWidth: '300px',
    fontFamily: 'sans-serif',
    marginBottom: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#e2d6fd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8px',
    fontSize: '16px'
  },
  name: {
    fontWeight: '500',
    fontSize: '14px'
  },
  stars: {
    color: '#FFC700',
    fontSize: '14px'
  },
  reviewText: {
    marginTop: '12px',
    fontSize: '16px',
    fontWeight: '400'
  }
};


export default TestimonialCard