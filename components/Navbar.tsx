"use client";

import Image from "next/image"
import Link from "next/link"
import NavItem from "./NavItem"


const Navbar = () => {
    
  return (
    <div className="navbar">
        <Link href="/">
          <div className=" flex items-center gap-2.5 cursor-pointer">
            <Image src="/images/logo.svg" alt="Logo" width={46} height={44}/>
          </div>
        </Link>
        <div className=" flex items-center gap-8"> 
            <NavItem />
            <p>SignIn</p>
        </div>
    </div>
  )
}

export default Navbar
