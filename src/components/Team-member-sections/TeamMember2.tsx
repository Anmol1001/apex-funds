import Image from "next/image";
import team1 from "../../../public/team-members/Team1.jpeg"
import team2 from "../../../public/team-members/Team2.jpeg"
import team3 from "../../../public/team-members/Team3.jpeg"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const TeamMember2 = () => {
    return (
        <>
        <div className="flex flex-row justify-around bg-eastern-blue-700 h-152 mt-20 pt-10">          
          <div className="team-member-2">
             <div className="row1 w-72 h-72 border border-eastern-blue-700 p-2">
                 <Image src={team1} alt="team-member-1" className="w-full h-full"/>   
             </div>
             <div className="row2 w-80 h-96 border-none bg-slate-300">
                <div className="mt-40 text-center space-y-3">
                <h1 className="text-3xl font-bold text-eastern-blue-900 ">Selena</h1>
                <h2 className="text-2xl font-semibold text-eastern-blue-600 ">Founder</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul className="flex flex-row gap-4 justify-center">
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaFacebook size={30}/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaLinkedin size={30} className=""/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaInstagramSquare size={30}/></li></a>
                    </ul>
                </div>
             </div>
            </div>

            <div className="team-member-2">
             <div className="row1 w-72 h-72 border border-eastern-blue-700 p-2">
                 <Image src={team2} alt="team-member-1" className="w-full h-full"/>   
             </div>
             <div className="row2 w-80 h-96 border-none bg-slate-300">
                <div className="mt-40 text-center space-y-3">
                <h1 className="text-3xl font-bold text-eastern-blue-900 ">Naeam</h1>
                <h2 className="text-2xl font-semibold text-eastern-blue-600 ">Designer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul className="flex flex-row gap-4 justify-center">
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaFacebook size={30}/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaLinkedin size={30} className=""/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaInstagramSquare size={30}/></li></a>
                    </ul>
                </div>
             </div>
            </div>

            <div className="team-member-2">
             <div className="row1 w-72 h-72 border border-eastern-blue-700 p-2">
                 <Image src={team3} alt="team-member-1" className="w-full h-full"/>   
             </div>
             <div className="row2 w-80 h-96 border-none bg-slate-300">
                <div className="mt-40 text-center space-y-3">
                <h1 className="text-3xl font-bold text-eastern-blue-900 ">Nimesh</h1>
                <h2 className="text-2xl font-semibold text-eastern-blue-600 ">Developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul className="flex flex-row gap-4 justify-center">
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaFacebook size={30}/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaLinkedin size={30} className=""/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaInstagramSquare size={30}/></li></a>
                    </ul>
                </div>
             </div>
            </div>
            
        </div>

        </>
    )
}

export default TeamMember2;