import React, { children, useState, useEffect } from 'react'
import { Header } from './'

const Layout = ({children}) => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    
    if(window){
      window.location.pathname === '/' ? setShowNav(false) : setShowNav(true)
    }
  },[])
  return (
    <>
      {showNav && <Header />}
      {children}
    </>
  )
}

export default Layout