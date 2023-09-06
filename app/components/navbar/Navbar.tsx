'use client'

import Categories from "./Categories"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return (
    <div>
       <Logo/>
       <Categories/>
       <UserMenu/> 
    </div>
  )
}

export default Navbar
