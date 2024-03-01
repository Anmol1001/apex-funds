
import nimesh1 from "../../public/WhatsApp Image 2024-02-11 at 14.53.03_69ac609a.jpg"
import nimesh2 from "../../public/WhatsApp Image 2024-02-11 at 14.52.30_35566376.jpg"
import anmol from "../../public/NCE072BEL340.jpg"
import TeamCards from "./Cards"

const CardItems = [{
    source: nimesh2,
    name: "Nimesh2",
    designation: "Digital Marketing",
},{
    source: nimesh1,
    name: "Nimesh1",
    designation: "Web Developer",
},{
    source: anmol,
    name: "Anmol",
    designation: "Nothing",
},]

const TeamMemberPage = () => {
    return (
        <>
        <section className="mt-20 mb-40">
            <h1 className="xsm:text-5xl md:text-6xl font-bold text-eastern-blue-700 text-center">Our Teams</h1>
            <div className="xsm:mt-8 xsm:flex xsm:flex-col xsm:items-center md:flex-row md:justify-around">
           {
            CardItems.map(card => ( <TeamCards key={card.name} source={card.source} name={card.name} designation={card.designation}/>
            ))
           }
           </div>
        </section>
        </>
    )
}

export default TeamMemberPage;