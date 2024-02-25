import Image from "next/image";
import stupa from "../../../../public/WhatsApp Image 2024-02-11 at 14.55.32_27e4386f.jpg";
import nimesh from "../../../../public/WhatsApp Image 2024-02-11 at 14.51.52_c4f72cb0.jpg";
import pexels from "../../../../public/pexels-james-wheeler-414612.jpg";
import camera from "../../../../public/digital_camera_photo-1080x675.jpg";

const BlogPage = () => {
    return (
        <>
            <section id="blogs" className="bg-gray-100 flex flex-row justify-center flex-wrap">
                    <div className="card w-[20.5rem] bg-white rounded-lg overflow-hidde shadow-sm m-5 ">
                        <Image src={pexels} alt="blog pic 1" className="w-full h-auto"/>
                        <div className="card-content p-4">
                            <h3 className="text-2xl font-bold text-eastern-blue-800 mb-2">Card 1</h3>
                            <p className="text-eastern-blue-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla dolorum accusantium harum quibusdam.</p>
                            <a href="" className="btn inline-block py-2 px-4 bg-eastern-blue-700 rounded-md mt-4 text-gray-100">Read More</a>
                        </div>
                    </div>
                    <div className="card w-[20.5rem] bg-white rounded-lg overflow-hidde shadow-sm m-5 ">
                        <Image src={stupa} alt="blog pic 2" className="w-full h-auto"/>
                        <div className="card-content p-4">
                            <h3 className="text-2xl font-bold text-eastern-blue-800 mb-2">Card 1</h3>
                            <p className="text-eastern-blue-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla dolorum accusantium harum quibusdam.</p>
                            <a href="" className="btn inline-block py-2 px-4 bg-eastern-blue-700 rounded-md mt-4 text-gray-100">Read More</a>
                        </div>
                    </div>
                    <div className="card w-[20.5rem] bg-white rounded-lg overflow-hidde shadow-sm m-5">
                        <Image src={camera} alt="blog pic 3" className="w-full h-auto"/>
                        <div className="card-content p-4">
                            <h3 className="text-2xl font-bold text-eastern-blue-800 mb-2">Card 1</h3>
                            <p className="text-eastern-blue-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla dolorum accusantium harum quibusdam.</p>
                            <a href="" className="btn inline-block py-2 px-4 bg-eastern-blue-700 rounded-md mt-4 text-gray-100">Read More</a>
                        </div>
                    </div>
                
            </section>
        </>
    )
}

export default BlogPage;