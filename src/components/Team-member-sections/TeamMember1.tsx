"use client"
import nimesh1 from "../../public/WhatsApp Image 2024-02-11 at 14.53.03_69ac609a.jpg"
import nimesh2 from "../../public/WhatsApp Image 2024-02-11 at 14.52.30_35566376.jpg"
import anmol from "../../public/NCE072BEL340.jpg"
import TeamCards from "../../components/Cards"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const TeamMember1 = () => {
    
const CardItems = [{
    source: nimesh2,
    name: "Nimesh2",
    designation: "Digital Marketing",
},{
    source: nimesh1,
    name: "Nimesh1",
    designation: "Web Developer",
},{
    source: anmol,
    name: "Anmol",
    designation: "Nothing",
},]

const teamVariant = {
        visible:{opacity:1, translateX: 0, transition:{duration: 2}},
        hidden: {opacity:0, translateX:-1000}
    }

    const control = useAnimation();
    
    const [ref,inView] = useInView();

    useEffect(()=> {
        if(inView){
            control.start("visible");
        }
    },[inView, control]);

    return (
        <>
        <motion.section
        ref={ref}
        variants={teamVariant}
        initial="hidden"
        animate={control}
        className="mt-20 mb-40">
            <h1 className="xsm:text-5xl md:text-6xl font-bold text-eastern-blue-700 text-center">Our Teams</h1>
            <div className="xsm:mt-8 xsm:flex xsm:flex-col xsm:items-center md:max-w-7xl md:mx-auto md:flex-row md:justify-between">
           {
            CardItems.map(card => ( <TeamCards key={card.name} source={card.source} name={card.name} designation={card.designation}/>
            ))
           }
           </div>
        </motion.section>
        </>
    )
}




export default TeamMember1;