'use client'

import Image from "next/image";
import logo from "../../public/Apex Funds limited logo_page-0002.jpg"
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";





const Navbar = () => {
    const links = [{
        href:"/",
        label:"Home"
    },
    {
        href:"/about",
        label:"About us"
    },
    {
        href:"/blogs",
        label:"Blogs"
    },
    {
        href:"/newsletter",
        label:"Newsletter"
    },
    {
        href:"/contact",
        label:"Contact Us"
    }
    ]
    const [menubar, setMenubar] = useState(false);

    const handleNav = () => {
         setMenubar(!menubar);
    }
    return(
        <nav className="h-24 w-full shadow-md">
           <div className='flex justify-between items-center max-w-7xl mx-auto h-full w-full px-4'>
            <Link href="/">
            <div>
                <Image
                src={logo} 
                alt="logo"
                width="80"
                height="10"
                priority
                className="cursor-pointer"
                />
            </div>
            </Link>
            <div className="hidden sm:flex">
                <ul className="hidden sm:flex">
                    {
                        links.map(link => (
                            <Link href={link.href} key={link.label}>
                               <li className="ml-10 hover:border-b text-xl">{link.label}</li> 
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div>
                  <div onClick={handleNav} className="sm:hidden pl-24">
                    <AiOutlineMenu size={25}/>
                    </div>  
            </div>
        </div> 
        <div className={menubar 
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-eastern-blue-700 p-10 ease-in duration-500 z-10" :"fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                <div onClick={handleNav} className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                    <AiOutlineClose size={25}/>
                    </div>
                </div> 
                <div className="flex-col py-4">
                        <ul>
                            {
                                links.map(link=>(
                                    <li onClick={()=>setMenubar(false)}
                                    className="py-4 cursor-pointer" key={link.label}>
                                        <Link href={link.href}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div> 
        </div>
        </nav>
    )
}

export default Navbar;