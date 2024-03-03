'use client'

import Box from "@/components/BoxPractice";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PracticePage = () => {
    
    return(
        <>
             <Box num={1}/>
             <Box num={2}/>
             <Box num={3}/>
        </>
    )
}

export default PracticePage;