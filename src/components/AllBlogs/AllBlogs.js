import { useSelector } from "react-redux";
import BlogCardMain from "../BlogCard";
import { useEffect, useState } from "react";

export const AllBlogs = () => {
    const blogs = useSelector((state) => state.blogs.blogs);

    const [allBlogs, setBlogs] = useState([])
    useEffect(() => {
        console.log('blogs', blogs)
        setBlogs(blogs)
    }, [blogs])
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '16px',
        }}>
            {
                allBlogs.map((blog) => (
                    <BlogCardMain blog={blog} />
                ))
            }
        </div >
    )
}