import React from 'react'

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#C5EFF7',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: 'auto',
    padding: '20px',
    fontFamily: 'Graduate'
  }
}

const Footer = () => {
  return (
    <div style={styles.container}>
      <p>Footer</p>
    </div>
  )
}

export default Footer