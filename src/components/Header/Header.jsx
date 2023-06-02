import React from 'react'
import NavBar from './NavBar/NavBar'
import SearchBar from './SearchBar/SearchBar'
import Logo from './Logo/Logo'

const Header = () => {
  return (
    <div>
        <Logo/>
        <SearchBar/>
        <NavBar/>
    </div>
  )
}

export default Header