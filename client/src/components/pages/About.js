import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const styles = {
  container: {
    display: 'flex'
    // backgroundColor: '#C8F7C5'
  }
}

const cardStyle = {
  container: {
    display: 'flex',
    paddingRight: '10px',
    backgroundColor: '#C8F7C5',
    color: '#3FC380',
    fontFamily: 'Macondo'
  }
}

const About = () =>
  <div styles={styles.container} >
    <Card>
      <div style={cardStyle.container}>
        <Typography type='display1' gutterBottom >
          <h1>About</h1>
        </Typography>
      </div>
    </Card>
  </div>

export default About
