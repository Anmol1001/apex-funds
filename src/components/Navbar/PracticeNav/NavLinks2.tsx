import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowDropup } from 'react-icons/io';

const NavLinks = () => {
    const links = [
        {name:'About', link:'#', submenu:true, sublink:[
            {name:"About Our Team", link:"/about"},
            {name:"How We Work", link:"/"}
        ]},
        {name:'Blogs',link:'/blogs'},
        {name:'Newsletter',link:'#'},
        {name:"Contact Us",link:'#'}
    ];

    const [heading, setHeading] = useState("");
    const [open, setOpen] = useState(false);

  return <>
        {
            links.map((link)=> (
                <>
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <Link href={link.link} className=''>
                        <h1 className='py-7 text-xl text-eastern-blue-900 transition-all duration-500 font-semibold flex justify-between md:pr-0 pr-5 hover:text-black' onClick={()=> heading !== link.name ? setHeading(link.name) : setHeading('')}>
         
                        {link.name} {
                         link.submenu &&   
                        <span className='md:hidden'>
                        {heading === link.name ? <IoIosArrowUp className='inline'/> : <IoIosArrowDown className='inline'/>} 
                        </span>
}
                     
                        </h1>
                        </Link>
                        
                        {/* Sub Menus */}
                        {link.submenu && ( 
                          <div >
                             <div className={`absolute hidden top-14 group-hover:md:block hover:md:block`}>
                                <div className='py-2'>
                                       <div className='w-4 h-4 left-3 absolute mt-1 bg-slate-700 rotate-45'>

                                       </div>
                                </div>
                                <div className='bg-slate-700'>
                                    {
                                    link.sublink.map((sub)=> (
                                           <div key={sub.name}>
                                            <li className='text-lg font-semibold text-slate-200 py-4 px-4'>
                                             <Link href={sub.link}className='transition duration-500 hover:text-eastern-blue-700'>{sub.name}</Link></li>
                                            </div> 
                                    ))
                                    }
                                </div>
                                </div>   
                          </div> 
                        )
                        }
                    </div>
                    {/* Mobile menus */}
                    <div className={`${heading === 'About' ? 'md:hidden' : 'hidden'}`}>
                        {
                            link.submenu && 
                            (
                                link.sublink.map((slink)=>(
                                    <div key={slink.name}>
                                        <div className='duration-500'>
                                            <Link href={slink.link}>
                                            <h1 className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slink.name}
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