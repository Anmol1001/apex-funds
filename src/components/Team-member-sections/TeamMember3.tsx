'use client'

import Image from 'next/image';
import backgdImage from "../../../public/team-members/bg-1.jpg"
import team1 from "../../../public/NCE072BEL340.jpg"; 
import team2 from "../../../public/team-members/Team2.jpeg"; 
import team3 from "../../../public/team-members/Team3.jpeg"; 
import team4 from "../../../public/team-members/Team4.jpeg"; 
import team7 from "../../../public/team-members/team7.jpg"; 
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const TeamMember3 = () => {

    const TeamHeaderVariant = {
        visible:{opacity:1,translateY:0 ,transition:{duration: 1}},
        hidden:{opacity:0, translateY:50}
    }
    
    const TeamVariant = {
        visible:{opacity:1, translateX: 0, transition:{duration: 2}},
        hidden: {opacity:0, translateX:-1000}
    }

    const control = useAnimation();
    
    const [ref,inView] = useInView();

    useEffect(()=> {
        if(inView){
            control.start("visible");
        }
    },[inView, control])

    return (
        <>
        <motion.h1 
        variants={TeamHeaderVariant}
        initial='hidden'
        animate={control}
        className="xsm:text-5xl xsm:font-bold xsm:text-eastern-blue-700 xsm:mb-8 sm:text-4xl md:text-6xl text-center mt-24">Our Team</motion.h1>
           <motion.section
           ref={ref} 
           variants={TeamVariant}
           initial="hidden"
           animate={control}
           className="flex justify-center flex-wrap max-w-7xl mx-auto">
                <div className="team-card h-108 w-64 m-5 shadow-md rounded-lg overflow-hidden text-center">
                    <div className="bg-image">
                        <Image src={backgdImage} alt="background-image" className="card-bg-img w-full h-56 object-cover"/>
                    </div>
                    <div className="pic">
                        <Image src={team7} alt="team-member-pic" className="h-28 w-28 rounded-full border border-8 border-eastern-blue-700 mx-auto relative mt-[-85px]"/>
                    </div>
                    <div className="info ">
                        <h3 className='text-eastern-blue-700 text-xl py-2 px-0 '>{`someone's name`}</h3>
                        <span className='text-sm text-slate-700'>web designer</span>
                        <p className='text-[0.8rem] py-2 px-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores molestiae eum cumque quos accusamus dolorum vero nam deserunt corporis!</p>
                        <div className="icons flex justify-center">
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaFacebook /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaInstagramSquare /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'>
                            <FaTwitterSquare />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="team-card h-108 w-64 m-5 shadow-md rounded-lg overflow-hidden text-center">
                    <div className="bg-image">
                        <Image src={backgdImage} alt="background-image" className="card-bg-img w-full h-56 object-cover"/>
                    </div>
                    <div className="pic">
                        <Image src={team2} alt="team-member-pic" className="h-28 w-28 rounded-full border border-8 border-eastern-blue-700 mx-auto relative mt-[-85px]"/>
                    </div>
                    <div className="info ">
                        <h3 className='text-eastern-blue-700 text-xl py-2 px-0 '>{`someone's name`}</h3>
                        <span className='text-sm text-slate-700'>web designer</span>
                        <p className='text-[0.8rem] py-2 px-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores molestiae eum cumque quos accusamus dolorum vero nam deserunt corporis!</p>
                        <div className="icons flex justify-center">
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaFacebook /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaInstagramSquare /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'>
                            <FaTwitterSquare />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="team-card h-108 w-64 m-5 shadow-md rounded-lg overflow-hidden text-center">
                    <div className="bg-image">
                        <Image src={backgdImage} alt="background-image" className="card-bg-img w-full h-56 object-cover"/>
                    </div>
                    <div className="pic">
                        <Image src={team3} alt="team-member-pic" className="h-28 w-28 rounded-full border border-8 border-eastern-blue-700 mx-auto relative mt-[-85px]"/>
                    </div>
                    <div className="info ">
                        <h3 className='text-eastern-blue-700 text-xl py-2 px-0 '>{`someone's name`}</h3>
                        <span className='text-sm text-slate-700'>web designer</span>
                        <p className='text-[0.8rem] py-2 px-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores molestiae eum cumque quos accusamus dolorum vero nam deserunt corporis!</p>
                        <div className="icons flex justify-center">
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaFacebook /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaInstagramSquare /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'>
                            <FaTwitterSquare />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="team-card h-108 w-64 m-5 shadow-md rounded-lg overflow-hidden text-center">
                    <div className="bg-image">
                        <Image src={backgdImage} alt="background-image" className="card-bg-img w-full h-56 object-cover"/>
                    </div>
                    <div className="pic">
                        <Image src={team1} alt="team-member-pic" className="h-28 w-28 rounded-full border border-8 border-eastern-blue-700 mx-auto relative mt-[-85px]"/>
                    </div>
                    <div className="info ">
                        <h3 className='text-eastern-blue-700 text-xl py-2 px-0 '>{`someone's name`}</h3>
                        <span className='text-sm text-slate-700'>web designer</span>
                        <p className='text-[0.8rem] py-2 px-3 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores molestiae eum cumque quos accusamus dolorum vero nam deserunt corporis!</p>
                        <div className="icons flex justify-center">
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaFacebook /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'><FaInstagramSquare /></a>
                            <a href="#" className='text-xl text-eastern-blue-700 mt-2 py-0 px-1'>
                            <FaTwitterSquare />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>   
        </>
    )
}

export default TeamMember3;