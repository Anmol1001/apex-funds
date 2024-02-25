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
            <div className="container max-w-60 h-80 border-2 border-gray-300">
                <div className="">
                <div className="h-32 bg-eastern-blue-600">
                </div>
                <div className="h-24 w-32">
                    <Image src={props.source} alt={props.name} height={200} width={200} className="max-w-full max-h-full rounded-[50%]"/>
                </div>
                </div>
                <h1 className="font-bold text-xl text-center">
                    {props.name}
                </h1>
                <h3 className="font-semibold text-center text-eastern-blue-500">
                    {props.designation}
                </h3>
            </div>
            
            
        </>
    )
}

export default TeamCards;