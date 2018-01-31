import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

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

const About = () =>
  <div styles={styles.container} >
    <Card>
      <div style={styles.container}>
        <Typography type='display1' gutterBottom >
          <h1>About</h1>
        </Typography>
      </div>
    </Card>
  </div>

export default About
