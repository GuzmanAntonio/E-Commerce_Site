import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#81ecec',
    alignItems: 'center',
    flexDirection: 'column',
    clor: 'white',
    width: '100vw',
    height: 'auto',
    padding: '20px',
    fontFamily: 'Graduate'
  }
}

const Home = () =>
  <div styles={styles.container} >
    <Card>
      <div style={styles.container}>
        <Typography type='display1' gutterBottom >
          <h1>Home</h1>
        </Typography>
      </div>
    </Card>
  </div>

export default Home
