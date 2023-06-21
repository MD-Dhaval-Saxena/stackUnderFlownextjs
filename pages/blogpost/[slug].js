import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import blogs from "../blogs";

const slug = () => {
  const [Blog, setBlog] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const slug = router.query.slug;
    if (!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlog(parsed);
      });
  }, [router.isReady]);
  return (
    <>
      <Navbar />
      <div className="main flex flex-col items-center justify-center space-y-10">
        <div className="text-2xl mt-6">
          <span className="font-bold">Stack Underflow Blog</span> :{" "}
          <span className="text-2xl font-bold"> {slug}</span>
        </div>
        <p className="w-[70%] leading-loose">{Blog && Blog.content} </p>
        {/* {blogs.map((blog) => {
          if (blog.blogName === slug) {
            return <p className="w-[70%] leading-loose">{blog.content}</p>;
          }
        })} */}
      </div>
    </>
  );
};

export default slug;
