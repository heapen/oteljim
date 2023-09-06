'use client'

import Categories from "./Categories"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import './NavbarStyle.css'

const Navbar = () => {
  return (
    <div className="navbar">
       <Logo/>
       <Categories/>
       <UserMenu/> 
    </div>
  )
}

export default Navbar
