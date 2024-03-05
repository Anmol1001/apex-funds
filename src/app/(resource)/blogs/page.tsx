import Image from "next/image";
import stupa from "../../../../public/WhatsApp Image 2024-02-11 at 14.51.52_c4f72cb0.jpg";
import pexels from "../../../../public/WhatsApp Image 2024-02-11 at 14.52.30_35566376.jpg";
import camera from "../../../../public/digital_camera_photo-1080x675.jpg";
import BlogCard from "@/components/Blog/BlogCard";
import BlogCardHero from "@/components/Blog/Hero";

const BlogPage = () => {
    return (
        <>
           <BlogCardHero />
            <BlogCard />
        </>
    )
}

export default BlogPage;