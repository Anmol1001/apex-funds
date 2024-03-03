'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Box = ({num}) => {

    const boxVariant = {
        visible: { opacity: 1, scale: 2, x:0 ,transition:{duration: 0.5 , delay: 1}},
        hidden: { opacity: 0,  x:200 , scale: 0 },
      }

    const [ref, inView] = useInView();
    
    const control = useAnimation();

    useEffect(() => {
        if(inView){
            control.start("visible");
        }else{
            control.start("hidden");
        }
    }, [control,inView])
    
    return(
        <>
            
            <motion.div 
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            style={{width: "100px", height: "50px", background:"red", marginBottom:"20rem"}}
            >
                <h1 style={{color:"white"}}>Box</h1>
            </motion.div>
            
        </>
    )
}

export default Box;