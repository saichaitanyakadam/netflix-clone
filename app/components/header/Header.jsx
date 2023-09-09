import React,{ useContext} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineNotificationsNone} from "react-icons/md"
import {BsXLg} from "react-icons/bs"
import {AiOutlineSetting} from "react-icons/ai"
import profilePic from "../../../src/assets/profile.svg"
import Image from 'next/image'
import { SidebarContext } from '../../../app/layout'

const Header = () => {
  const {show,setShow}=useContext(SidebarContext)
  return (
    <header className='px-3 py-2 flex w-screen lg:w-[80vw] items-center justify-between lg:justify-end'>
        {!show?<GiHamburgerMenu className='text-[1.5rem] lg:hidden' onClick={()=>{
              setShow(true)
        }}/>:
        <BsXLg className='text-[1.5rem] lg:hidden' onClick={()=>{
          setShow(false)
        }}/>}
        <div className='text-[20px] flex space-x-2 h-[30px] items-center'>
            <MdOutlineNotificationsNone/>
            <AiOutlineSetting />
            <Image src={profilePic} height={40} alt="profileImage"/>
        </div>
    </header>
  )
}

export default Header