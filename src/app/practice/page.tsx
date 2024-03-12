

import Box from "@/components/BoxPractice";
import TeamMemberPage from "@/components/TeamMembers";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TeamMember3 from "../../components/Team-member-sections/TeamMember3"
import ContactPage from "@/components/contact-com/ContactAnother";
import ContactContent from "@/components/contact-com/ContactContent";
import Navbar from "@/components/Navbar/Navbar";
import NavBarPractice from "@/components/Navbar/PracticeNav/NavPractice";

const PracticePage = () => {
    
    return(
        <>
           <NavBarPractice />
        </>
    )
}

export default PracticePage;