import Image, { StaticImageData } from "next/image";
import team1 from '../../public/team-members/The-Difference-Between-Mens-Formal-and-Semi-Formal-Dress-Codes.jpg'


interface CardItem  {
    source: StaticImageData,
    name: string,
    designation: string,
}

const TeamCards = (props:CardItem) => {
    return (
        <>
        
            <div className="w-56 border-2 border-gray-300 cards xsm:mb-12 md:mb-0">
            
                <div className="h-32 bg-gray-800 card-bg">
                </div>
                <div className="h-32 w-32 mx-auto card-image">
                    <Image src={props.source} alt={props.name} className="max-w-full max-h-full rounded-[50%] object-cover"/>
                </div>
                <div className="card-headings">
                <h1 className="font-bold text-xl text-center">
                    {props.name}
                </h1>
                <h3 className="font-semibold text-center text-eastern-blue-500">
                    {props.designation}
                </h3>
                </div>
            </div>
            
            
        </>
    )
}

export default TeamCards;