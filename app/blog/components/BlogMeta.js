import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export async function generateMetadata({ params }) {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams;

  useEffect(() => {
    const getBlogData = async () => {
      const query = `*[_type == 'blog' && slug.current == $slug]{
            _createdAt,
            author,
            title,
            category,
            description,
            date,
            'slug': slug.current,
            'authorImage': image.asset->url,
            'image': image.asset->url,
            'alt': image.alt,
          }`;

      try {
        const result = await client.fetch(query, { slug });
        if (result && result.length > 0) {
          const blog = result[0];

          return {
            title: blog.title,
            description: blog.description,
            openGraph: {
              title: blog.title,
              description: blog.description,
              url: `http://www.hhlfoundation.org/${blog.slug}`,
              siteName: "Hassan and Hussein Lecky Foundation",
              type: "article",
              images: [
                {
                  url: blog.image,
                  alt: blog.alt,
                },
              ],
            },
            twitter: {
              card: "summary_large_image",
              title: blog.title,
              description: blog.description,
              creator: "@hhlfoundation",
              image: {
                url: blog.image,
                alt: blog.alt,
              },
            },
          };
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
      return {
        title: "Hassan and Hussein Lecky Foundation",
        description: "Empowering the youth",
        openGraph: {
          title: "Hassan and Hussein Lecky Foundation",
          description: "Empowering the youth",
          url: "http://www.hhlfoundation.org",
          siteName: "Hassan and Hussein Lecky Foundation",
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title: "Hassan and Hussein Lecky Foundation",
          description: "Empowering the youth",
          creator: "@hhlfoundation",
          image: {
            url: "/path/to/default/image.jpg",
            alt: "Default Image Alt",
          },
        },
      };
    };

    getBlogData();
  }, [slug]);
}
