import React from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'

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

const Header = ({domainData}) => {
  return (
    <header style={styles.container}>
      <nav style={styles.nav}>
        <NavItem exact to='/' > Home </NavItem>
        <NavItem to='/about' > About </NavItem>
        <NavItem to='/products' > Products </NavItem>
        <NavItem to='/add-product' > Add Products </NavItem>
        {domainData.loggedOut ? <NavItem to='/sign-up'> Register </NavItem> : null }
        {domainData.loggedOut ? <NavItem to='/login'> Login </NavItem> : null }
        {domainData.loggedIn ? <HeaderLink onClick={domainData.logoutUser}> Log Out </HeaderLink> : null }
        {domainData.loggedIn ? <HeaderLink>{domainData.user.local.email}</HeaderLink> : null}
      </nav>
    </header>
  )
}

export default Header