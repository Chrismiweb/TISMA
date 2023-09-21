import React from 'react'
import Navbar from './Navbar'
import AboutDesigner from './AboutDesigner'
import AvailableProduct from './AvailableProduct'
import Review from './Review'
import Contact from './Contact'

const View = () => {
  return (
    <div>
        <Navbar/>
        <AboutDesigner/>
        <AvailableProduct/>
        <Review/>
        <Contact/>
    </div>
  )
}

export default View