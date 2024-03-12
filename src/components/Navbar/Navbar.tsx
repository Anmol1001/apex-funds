'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../../public/Apex Funds limited logo-01.png";
import Link from 'next/link';
import NavLinks from './NavLinks';
import Button from '../Button';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';



const NavBarPractice = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
    <nav className="bg-white sm:py-0 sm:px-12">
            <div className="nav-container flex items-center font-medium justify-between md:max-w-7xl">
                <div className="nav-logo md:w-auto p-2 w-full z-50 flex justify-between">
                    <Link href='/'>
                    <Image src={logo} alt="apex logo" className="md:cursor-pointer w-24 h-24"/>
                    </Link>
                    <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
                        
                        { open ? <IoMdClose /> : <CiMenuBurger />}
                        </div>
                    
                </div>
                <div className='nav-link-container'>
                <ul className="nav-links md:flex hidden uppercase items-center gap-8">
                    
                    <NavLinks />
                    <div className='md:block hidden'>
                        <Button />
                    </div>
                    
                </ul>
                </div>

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

export default NavBarPractice;