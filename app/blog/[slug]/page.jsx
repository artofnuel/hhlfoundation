"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Animate } from "@/app/components/Animate";
import { InfinitySpin } from "react-loader-spinner";
import { myPortableTextComponents } from "@/app/components/data";

const page = () => {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const getBlogData = async () => {
      const query = `*[_type == 'blog' && slug.current == $slug]{
        _createdAt,
        title,
        category,
        description,
        date,
        blogImages[] {
          'url': asset->url
        },
        'slug': slug.current,
        'image': image.asset->url,
        'alt': image.alt,
        content,
      }`;
      try {
        const result = await client.fetch(query, { slug });
        if (result && result.length > 0) {
          setBlog(result[0]); // Assuming the slug is unique and only one blog post matches
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    getBlogData();
  }, [slug]);

  if (!blog) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="#F2C94C"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  const { blogImages } = blog;

  const headings = `prose-headings:text-2xl md:prose-h1:text-5xl md:prose-h2:text-4xl prose-h4:text-3xl prose-headings:text-white`;
  const p = `prose-p:font-medium prose-p:text-white/70 prose-p:text-lg prose-p:text-justify`;
  const strong = `prose-strong:text-white prose-strong:font-bold`;
  const anchorLists = `prose-a:text-primary prose-ol:text-white/70 prose-ul:text-white/70`;

  return (
    <Animate>
      <main className="w-full h-auto text-primary text-pretty">
        <div className="w-full mx-auto">
          <div className="w-full h-auto p-5 bg-bkg flex flex-col justify-center md:justify-start items-center gap-5 relative my-10">
            <h1 className="text-center font-bold text-xl md:text-4xl">
              {blog.title}
            </h1>
            <p className="text-sm text-white">
              <span className="p-1 px-4 mr-2 rounded-full bg-white text-primary">
                {blog.category}
              </span>{" "}
              <span className="p-1 px-4 mr-2 rounded-full bg-white text-primary">
                {blog.date}
              </span>
            </p>
            <p className="font-base text-lg line-clamp-2 text-center">
              {blog.description}
            </p>
            {blog.image && (
              <div className="w-full h-auto">
                <Image
                  src={blog.image}
                  alt={blog.image.alt}
                  width={1000}
                  height={1000}
                  className="w-10/12 md:w-[600px] mx-auto aspect-video object-cover object-top rounded-lg drop-shadow-lg"
                />
              </div>
            )}
          </div>

          <article className="my-5 p-5">
            <div className="max-w-4xl mx-auto text-pretty text-justify">
              <PortableText
                value={blog.content}
                components={myPortableTextComponents}
              />
            </div>
          </article>
          <div>
            {blogImages && (
              <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-5 p-5">
                {blogImages.map((blog, index) => (
                  <div className="w-full">
                    <Image
                      src={blog.url}
                      alt="event image"
                      width={1000}
                      height={1000}
                      className="w-full h-full aspect-square object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Render other blog content here */}
      </main>
    </Animate>
  );
};

export default page;
