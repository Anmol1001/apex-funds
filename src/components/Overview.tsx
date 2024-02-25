import Image from "next/image";
import stupa from "../../public/WhatsApp Image 2024-02-11 at 14.55.31_174152fe.jpg"
import nimesh from "../../public/WhatsApp Image 2024-02-11 at 14.53.03_69ac609a.jpg"

const OverviewPage = () => {
    return(
        <>
        <div className="flex p-16 justify-between">
           <div className="">
                <Image src={nimesh} height={400} width={400} alt="nimesh photo"/>
            </div>
         <div className="space-y-4 pr-32">
          <h1 className="text-eastern-blue-500 font-semibold text-2xl underline">Overview</h1> 
          <p className="max-w-[400px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ratione non dignissimos temporibus distinctio! Voluptate ullam corrupti debitis aperiam iste praesentium repudiandae officiis deleniti reprehenderit! Dignissimos ea nisi dicta quis molestiae <span className="text-eastern-blue-700"> officiis cum soluta alias distinctio! Blanditiis consectetur molestias temporibus</span> distinctio ea maxime soluta, ipsam illum fugiat unde! Dolores sapiente iste quaerat optio assumenda tenetur ad itaque dignissimos nulla eum delectus molestias doloremque quam reprehenderit, repellendus provident earum possimus explicabo quo omnis maxime, quae aspernatur velit illum. Libero animi amet laborum porro voluptate necessitatibus voluptatibus adipisci consequuntur doloribus atque. Laboriosam veniam libero ab dolorum, dolore laborum exercitationem blanditiis. Mollitia, tempora.
            </p> 
            </div>
          </div>
        </>
    )
}

export default OverviewPage;