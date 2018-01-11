import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'


const NavItem = ({to, children, bool}) =>
  <div>
    <NavLink to={to}>{children}</NavLink>
  </div>

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {exact: false}

export default NavItem
