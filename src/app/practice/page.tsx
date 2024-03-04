'use client'

import Box from "@/components/BoxPractice";
import TeamMemberPage from "@/components/TeamMembers";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TeamMember2 from "../../components/Team-member-sections/TeamMember2"
const PracticePage = () => {
    
    return(
        <>
            <TeamMember2 />
        </>
    )
}

export default PracticePage;