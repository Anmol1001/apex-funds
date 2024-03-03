"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Line = () => {

    const hrVariant = {
        visible:{opacity:1,translateY:0 ,transition:{duration: 1}},
        hidden:{opacity:0, translateY:50}
    }
    const [ref, inView] = useInView();
    const control = useAnimation();

    useEffect(()=>{
        if(inView){
            control.start("visible");
        }
    },[inView, control])

    return (
        <>
            <motion.hr 
            ref={ref}
            variants={hrVariant}
            initial="hidden"
            animate={control}   
            className="h-2 xsm:w-[90%] md:max-w-7xl mx-auto bg-eastern-blue-700 mt-16"/>
        </>
    )
}

export default Line;