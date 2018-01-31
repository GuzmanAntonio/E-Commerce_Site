import React from 'react'

import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'

// const styles = {
//   contianer: {

//   }
// }

const Layout = ({domainData}) => {
  return (
    <div>
      <Header 
        domainData={domainData}
      />
      <Main 
        domainData={domainData}
      />
      <Footer />
    </div>
  )
}

// Layout.propTypes = {
//   domainData: AppPropTypes.domainData
// }

export default Layout