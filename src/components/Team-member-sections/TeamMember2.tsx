import Image from "next/image";
import team1 from "../../../public/team-members/Team1.jpeg"
import team2 from "../../../public/team-members/Team2.jpeg"
import team3 from "../../../public/team-members/Team3.jpeg"
import team4 from "../../../public/team-members/Team4.jpeg"
import team5 from "../../../public/team-members/team5.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const TeamMember2 = () => {
    return (
        <>
        <div className="flex flex-row justify-around bg-eastern-blue-700 mt-20 pt-10 w-full">          
          <div className="team-member-2 w-1/3">
             <div className="row1 w-2/3 lg:h-3/4 xl:h-2/3 border border-eastern-blue-700 p-2">
                 <Image src={team3} alt="team-member-1" className="w-full h-full object-cover"/>   
             </div>
             <div className="row2 w-3/4 sm:h-full xl:h-4/5 2xl:h-3/5 2xl:pb-6 border-none bg-slate-300 flex flex-col items-center justify-end md:pb-2 xl:pb-4 lg:space-y-3 xl:space-y-4">
                
                <h1 className="lg:text-2xl xl:text-3xl font-bold text-eastern-blue-900">Selena</h1>
                <h2 className="lg:text-xl xl:text-2xl font-semibold text-eastern-blue-600 ">Founder</h2>
                <p className="text-center lg:text-sm xl:text-lg font-extralight font-mono leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, iste!</p>
                <ul className="flex flex-row gap-4 justify-center">
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaFacebook size={25}/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaLinkedin size={25} className=""/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaInstagramSquare size={25}/></li></a>
                    </ul>
                
             </div>
            </div>

            <div className="team-member-2 w-1/3">
             <div className="row1 w-2/3 lg:h-3/4 xl:h-2/3 border border-eastern-blue-700 p-2">
                 <Image src={team2} alt="team-member-1" className="w-full h-full object-cover"/>   
             </div>
             <div className="row2 w-3/4 sm:h-full xl:h-4/5 2xl:h-3/5 2xl:pb-6 border-none bg-slate-300 flex flex-col items-center justify-end md:pb-2 xl:pb-4 lg:space-y-3 xl:space-y-4">
                
                <h1 className="lg:text-2xl xl:text-3xl font-bold text-eastern-blue-900">Selena</h1>
                <h2 className="lg:text-xl xl:text-2xl font-semibold text-eastern-blue-600 ">Founder</h2>
                <p className="text-center lg:text-sm xl:text-lg font-extralight font-mono leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, iste!</p>
                <ul className="flex flex-row gap-4 justify-center">
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaFacebook size={25}/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaLinkedin size={25} className=""/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaInstagramSquare size={25}/></li></a>
                    </ul>
                
             </div>
            </div>

            <div className="team-member-2 w-1/3">
             <div className="row1 w-2/3 lg:h-3/4 xl:h-4/5 2xl:h-4/5 border border-eastern-blue-700 p-2">
                 <Image src={team3} alt="team-member-1" className="w-full h-full object-cover"/>   
             </div>
             <div className="row2 w-3/4 sm:h-full xl:h-full 2xl:h-4/5 2xl:pb-6 border-none bg-slate-300 flex flex-col items-center justify-end md:pb-2 xl:pb-4 lg:space-y-3 xl:space-y-4">
                
                <h1 className="lg:text-2xl xl:text-3xl font-bold text-eastern-blue-900">Selena</h1>
                <h2 className="lg:text-xl xl:text-2xl font-semibold text-eastern-blue-600 ">Founder</h2>
                <p className="text-center lg:text-sm xl:text-lg font-extralight font-mono leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, iste!</p>
                <ul className="flex flex-row gap-4 justify-center">
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaFacebook size={25}/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaLinkedin size={25} className=""/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 text-eastern-blue-700 hover:text-eastern-blue-900"><FaInstagramSquare size={25}/></li></a>
                    </ul>
                
             </div>
            </div>
            
        </div>

        </>
    )
}

export default TeamMember2;