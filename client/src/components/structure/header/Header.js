import React, {Component} from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'
// import Button from 'material-ui/Button'

const styles = {
  container: {
    padding: '15',
    display: 'flex',
    backgroundColor: '#F1A9A0',
    flexDirection: 'row',
  },
  nav: {
    fontFamily: 'Candal, sans-serif'
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

class Header extends Component {
  state = {
    anchorE1: null
  }

  handleClick = () => {
    this.setState({anchorE1: null})
  }

  render () {
    return (
      <div style={styles.container}>
        <nav style={styles.nav}>
          <NavItem exact to='/' > Home </NavItem>
          <NavItem to='/about' > About </NavItem>
          <NavItem to='/products' > Products </NavItem>
          <NavItem to='/add-product' > Add Products </NavItem>
          <div style={styles.links}>
            {this.props.domainData.loggedOut ? <NavItem to='/sign-up'> Register </NavItem> : null }
            {this.props.domainData.loggedOut ? <NavItem to='/login'> Login </NavItem> : null }
            {this.props.domainData.loggedIn ? <HeaderLink onClick={this.props.domainData.logoutUser}> Log Out </HeaderLink> : null }
            {this.props.domainData.loggedIn ? <HeaderLink>{this.props.domainData.user.email}</HeaderLink> : null}
            {this.props.domainData.loggedIn ? <NavItem to='/cart'> Cart </NavItem> : null}
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
