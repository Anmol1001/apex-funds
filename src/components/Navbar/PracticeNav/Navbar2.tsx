'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../../../public/Apex Funds limited logo-01.png";
import Link from 'next/link';
import NavLinks from './NavLinks';
import Button from '../../Button';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
        <nav className="bg-white">
            <div className="flex items-center font-medium justify-around">
                <div className="md:w-auto p-2 w-full z-50 flex justify-between">
                    <Link href='/'>
                    <Image src={logo} alt="apex logo" className="md:cursor-pointer w-24 h-24"/>
                    </Link>
                    <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
                        
                    { open ? <IoMdClose /> : <CiMenuBurger />}
                    </div>
                    
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8">
                    
                    <NavLinks />
                    <div className='md:block hidden'>
                        <Button />
                    </div>
                    
                </ul>

                {/* Mobile nav*/}
                <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-28 pl-4 duration-500 z-40 ${ open ? 'left-0' : 'left-[-100%]'}`}>
                        <li>
                        <Link href="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                        </li>
                        <NavLinks />
                        <div className="py-5">
                            <Button />
                        </div>
                    </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar