'use client'
import {GiHamburgerMenu} from 'react-icons/Gi'
import  Image  from 'next/image';
import { useState } from 'react';
import UserMenuItem from './UserMenuItem';

const UserMenu = () => {
    const [openMenu, setOpenMenu] = useState(false)
  return (
    <div onClick={() => setOpenMenu(!openMenu)} className='usermenu'>
      <GiHamburgerMenu size={25}/> 
      <Image
      src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}
      alt=''
      width={40}
      height={40}
      />
      {
        openMenu && (
            <div className='openmenu'>
                <UserMenuItem
                name="Sign In"
                onClick={() => {}}
                />
                <UserMenuItem
                name="Sign Up"
                onClick={() => {}}
                />
            </div>
        )
      }
    </div>
  )
}

export default UserMenu
