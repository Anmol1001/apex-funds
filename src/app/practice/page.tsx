'use client'

import Box from "@/components/BoxPractice";
import TeamMemberPage from "@/components/TeamMembers";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TeamMember3 from "../../components/Team-member-sections/TeamMember3"
const PracticePage = () => {
    
    return(
        <>
            <TeamMember3 />
        </>
    )
}

export default PracticePage;