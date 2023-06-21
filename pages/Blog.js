import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Blog = ({allBlogs}) => {
  const [Blogs, setBlogs] = useState(allBlogs);
  // useEffect(() => {
  //   console.log("Calling UseEffect");
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlogs(parsed);   
  //     });
  // }, []);

  return (
    <>
      <Navbar />

      <div className="blog flex flex-col items-center justify-center space-y-4 mt-10">
        {Blogs.map((blog, index) => {
          return (
            <>
              <div
                key={index}
                className="card border-2 border-black rounded w-[75%] p-11"
              >
                <div className="blogitem text-2xl text-gray-700 font-semibold">
                  <Link href={`/blogpost/${blog.slug}`}> {blog.blogName}</Link>
                  {/* <Link href={`/api/getblog?slug=how-to-learn-Go-lang`}> {blog.blogName}</Link> */}
                </div>
                <div className="blogitem text-sm line-clamp-2">
                  {blog.content}
                </div>
                  <Link href={`/blogpost/${blog.slug}`} className="hover:text-blue-400 hover:underline">read more</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export async function getServerSideProps(context) {

  let data=await fetch("http://localhost:3000/api/blogs");
  let allBlogs=await data.json()
  return {
    props:{ allBlogs}, // will be passed to the page component as props
  }
}
export default Blog;
