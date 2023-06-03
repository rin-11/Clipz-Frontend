import React from 'react'
import LogoPNG from '../../../assets/logo.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='Logo'>
      <img src={LogoPNG} alt="butterflyclipz" className="Logo-PNG" />
      <h1>ButterflyClipz</h1>
    </div>
  )
}

export default Logo