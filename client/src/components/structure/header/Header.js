import React from 'react'
import NavItem from './NavItem'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#00B16A',
    paddingTop: '15',
    padding: '10',
    flexDirection: 'row',
    borderBottom: '3px solid #1E824C'
  },
  nav: {
    fontFamily: 'Candal, sans-serif'
  }
}

const Header = () => {
  return (
    <header style={styles.container}>
      <nav style={styles.nav}>
        <NavItem exact to='/' > Home </NavItem>
        <NavItem to='/about' > About </NavItem>
        <NavItem to='/products' > Products </NavItem>
        <NavItem to='/add-product' > Add Products </NavItem>
        <NavItem to='/sign-up' > Sign-Up </NavItem>
      </nav>
    </header>
  )
}

export default Header