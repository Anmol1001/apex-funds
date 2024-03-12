import Image from "next/image";
import blogsImage from "../../../../../public/blog-1.jpg";

const BlogPage = () => {
    return (
        <>
            <div className="blog-container">
                <div className="flex flex-row flex-wrap h-[100vh]">
                <div className="md:h-full w-1/2">
                    <Image src={blogsImage} alt="Image for blog" className="w-full h-full" />
                </div>
                <div className="h-full w-1/2 flex flex-col bg-eastern-blue-900 text-slate-200 items-center">
                    <h1 className="font-bold text-4xl mt-7">Blogs Page</h1>
                    <h3 className="fent-semibold text-7xl mt-40">Topic of the Blog</h3>
                    <p className="mt-40">March 3rd 2024</p>
                    <p>By: Suman Gautam</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage;