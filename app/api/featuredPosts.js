// app/api/featuredPosts.js

import { client } from "@/sanity/lib/client";

export const fetchBlogs = async () => {
  const query = `*[_type == 'blog']{
    _createdAt,
    title,
    category,
    description,
    date,
    'slug': slug.current,
    'image': image.asset->url,
    'alt': image.alt,
    content
  }`;

  const data = await client.fetch(query);

  const shuffledPosts = data.sort(() => 0.5 - Math.random());
  const blogPosts = shuffledPosts.slice(0, 3);

  return blogPosts;
};

export const fetchAll = async () => {
  const query = `*[_type == 'blog']{
    _createdAt,
    title,
    category,
    description,
    date,
    'slug': slug.current,
    'image': image.asset->url,
    'alt': image.alt,
    content
  }`;

  const data = await client.fetch(query);

  return data;
};

export const getBlogData = async () => {
  const query = `*[_type == 'blog' && slug.current == $slug]{
    _createdAt,
    title,
    category,
    description,
    date,
    'slug': slug.current,
    'image': image.asset->url,
    'alt': image.alt,
    content,
  }`;
  try {
    const result = await client.fetch(query, { slug });
    return result[0];
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
};
