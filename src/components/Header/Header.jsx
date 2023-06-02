import React from 'react'
import NavBar from './NavBar/NavBar'
import SearchBar from './SearchBar/SearchBar'
import Logo from './Logo/Logo'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className="Logo"><Logo/></div>
        <div className="SearchBar"><SearchBar/></div>
        <div className="NavBar"><NavBar/></div>
    </div>
  )
}

export default Header