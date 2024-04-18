"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchBlogs } from "../../api/featuredPosts";
import { Animate } from "@/app/components/Animate";
import Link from "next/link";

const page = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      const res = await fetchBlogs();
      setFeaturedPosts(res);
    };

    fetchFeaturedPosts();
  }, []);

  if (!featuredPosts) {
    return <div>Loading...</div>;
  }

  return (
    <Animate>
      <main className="w-full min-h-screen md:h-screen bg-bkg text-primary">
        <div className="w-full h-full max-w-7xl mx-auto p-5">
          <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
            <div className="py-20 w-full md:w-1/2 h-full flex flex-col gap-5">
              <div className="p-3 bg-white flex gap-5 relative justify-center items-center">
                <div className="w-[10px] h-[35px] bg-primary absolute top-[25%] left-0"></div>
                <h1 className="text-xl md:text-4xl font-bold">
                  The HHL Foundation Events
                </h1>
              </div>
              <h2 className="text-lg">
                Stay Appraised on all events hosted
                <br /> by the Hassan and Hussein Lecky Foundation
              </h2>
            </div>
            <div className="p-5 w-full md:w-1/2 h-auto flex flex-col gap-5 bg-white rounded-lg">
              <p className="text-center md:text-left font-light text-xl">
                Featured Events
              </p>
              {featuredPosts.map((blog, index) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} prefetc>
                  <div className="w-full flex gap-5 justify-start items-center">
                    <div className="w-full md:w-[200px]">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="w-[150px] h-[150px] object-cover rounded-xl"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-3">
                      <h3 className="text-lg font-semibold line-clamp-1">
                        {blog.title}
                      </h3>
                      <p>{blog.date}</p>
                      <p className="line-clamp-2">{blog.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Animate>
  );
};

export default page;
