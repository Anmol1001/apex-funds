
import stupa from "../../public/WhatsApp Image 2024-02-11 at 14.55.31_174152fe.jpg"
import nimesh1 from "../../public/WhatsApp Image 2024-02-11 at 14.53.03_69ac609a.jpg"
import nimesh2 from "../../public/WhatsApp Image 2024-02-11 at 14.52.30_35566376.jpg"
import anmol from "../../public/NCE072BEL340.jpg"
import TeamCards from "./Cards"

const CardItems = [{
    source: stupa,
    name: "Stupa",
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
        <section>
            <div className="container flex justify-evenly">
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