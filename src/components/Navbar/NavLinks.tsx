import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowDropup } from 'react-icons/io';

const NavLinks = () => {
    const links = [
        {name:'About', link:'#', submenu:true, sublink:[
            {name:"About Apex Funds", link:"/about"},
            {name:"Board of Directors", link:"/"},
            {name:"Management Team", link:"/"},
            {name:"Investment Comittee", link:"/"},
            {name:"Our Mission & Vision", link:"/"}
        ]},
        {name:'Resources', link:"#", submenu:true, sublink:[
            {name: "Blogs", link:"/blogs"},
            {name: "Newsletter", link:"#"}
    ]},
        {name:'Investment', link:'/investment'},
        {name:'Funds', link:'/funds'}
    ];

    const [heading, setHeading] = useState("");
    const [open, setOpen] = useState(false);

  return <>
        {
            links.map((link)=> (
                <>
                <div>
                    <div className='px-3 text-left relative md:cursor-pointer group'>
                        <Link href={link.link} className=''>
                        <h1 className='py-7 text-lg text-eastern-blue-900 transition-all duration-500 font-semibold flex justify-between md:pr-0 pr-5 hover:text-black' onClick={()=> heading !== link.name ? setHeading(link.name): setHeading('')}>
         
                        {link.name} {
                         link.submenu &&   
                        <span className='md:hidden'>
                         <IoIosArrowUp className={`inline ${heading !== link.name ? 'transition-all ease-in duration-300 transform' : 'transition duration-500 rotate-180'}`}/>
                        </span>
}
                        </h1>
                        </Link>
                        
                        {/* Sub Menus */}
                        {link.submenu && ( 
                           <div className='w-52 absolute p-4 top-[80%] left-[-16px] rounded-xl overflow-hidden bg-white transform translate-y-0 transition duration-300 ease-in opacity-0 invisible group-hover:md:translate-y-2 group-hover:md:visible group-hover:md:opacity-100 group-hover:md:z-20'>
                            {
                                link.sublink.map((slink)=>(
                                    <h1 key={slink.name} className='block text-eastern-blue-900 font-semibold transition ease-in duration-300 p-3 hover:text-white hover:bg-eastern-blue-900 rounded-xl'>
                                    <Link href={slink.link}>
                                        {slink.name}
                                    </Link>
                                    </h1>                                    
                                ))
                            }
                           </div>
                        )
                        }
                    </div>
                    {/* Mobile menus */}
                    <div className={`${heading === 'About' || 'Resources' ? 'xsm:invisible xsm:absolute xsm:transform xsm:opacity-30 xsm:translate-y-[-50%]' :'xsm:transform xsm:translate-y-0 xsm:opacity-1 xsm:visible'} md:hidden transition duration-700`}>
                        {
                            link.submenu && 
                            (
                                link.sublink.map((slink)=>(
                                    <div key={slink.name}>
                                        <div className=''>
                                            <Link href={slink.link}>
                                            <h1 className='py-8 pl-7 font-semibold md:pr-0 pr-5'>{slink.name}
                                            </h1>
                                            </Link>
                                            </div>    
                                    </div>
                                ))
                                )
                        }
                    </div>
                </div>
                </>
            ))
        }
  </>
}

export default NavLinks