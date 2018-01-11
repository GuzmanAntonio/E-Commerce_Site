import React from 'react'
import NavItem from './NavItem'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#9b59b6'
  }
}

const navStyle = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const Header = () => {
  return (
    <header style={styles.container}>
      <nav style={navStyle.container}>
        <NavItem exact to='/' > Home </NavItem>
        <NavItem to='/about' > About </NavItem>
        <NavItem to='/products' > Products </NavItem>
        <NavItem to='/add-product' > Add Products </NavItem>
      </nav>
    </header>
  )
}

export default Header