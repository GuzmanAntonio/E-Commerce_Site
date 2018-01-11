import React from 'react'

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    borderTop: '2px solid #bdc3c7'
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