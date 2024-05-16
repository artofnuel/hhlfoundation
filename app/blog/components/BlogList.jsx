"use client";
import { fetchAll } from "@/app/api/featuredPosts";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Animate } from "@/app/components/Animate";

const BlogList = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetchAll();
      // Sort the blog posts by _createdAt in descending order
      const sortedPosts = res.sort(
        (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
      );
      setBlog(sortedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <Animate>
      <main className="w-full h-auto p-5 max-w-7xl mx-auto text-primary text-pretty">
        <h3 className="text-xl md:text-4xl font-bold">All Events</h3>
        <div className="my-10 w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {blog.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug}`} prefetch>
              <div className="w-full h-[180px] p-5 bg-bkg rounded-lg flex flex-col gap-3">
                <h1 className="text-xl md:text-2xl truncate font-blold">
                  {post.title}
                </h1>
                <p className="text-sm text-white">
                  <span className="p-1 px-4 mr-2 rounded-full bg-white text-primary">
                    {post.category}
                  </span>{" "}
                  <span className="p-1 px-4 mr-2 rounded-full bg-white text-primary">
                    {post.date}
                  </span>
                </p>
                <p className="font-base text-lg line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Animate>
  );
};

export default BlogList;
