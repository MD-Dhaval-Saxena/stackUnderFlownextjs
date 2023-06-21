import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./Navbar";
const inter = Inter({ subsets: ["latin"] });
import blogs from "./blogs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack Underflow</title>
      </Head>
      <main className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navbar />
        {/* <div className={`${home1.content} ${home2.content}`}> */}
        <div className="content flex  flex-col justify-center items-center">
          <h1 className="text-center font-thin text-2xl mt-5 w-full">
            Welcome User to Stack Underflow{" "}
          </h1>
          <Image src="/img1.png" width={200} height={150} />
          <p className="flex justify-center mt-4 text-xl underline mb-4">
            {" "}
            Latest Blogs{" "}
          </p>
          <div className="blog flex flex-col items-center justify-center space-y-4 ">
            {blogs.map((blog) => {
              return (
                <>
                  <div className="blogitem text-xl text-gray-700 font-semibold">
                    {blog.blogName}
                  </div>
                  <div className="blogitem w-1/4 line-clamp-2">{blog.content}</div>
                  <p></p>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
