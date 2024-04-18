import React from "react";
import BlogHero from "./components/BlogHero";
import BlogList from "./components/BlogList";

export const metadata = {
  title: "Events | Hassan and Hussein Lecky Foundation",
  description:
    "Check out our blog for all information regarding the foundation and it's events!",
  alternates: {
    canonical: "/blog",
    languages: {
      "en-US": "/en-US",
    },
  },
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Events | Hassan and Hussein Lecky Foundation",
    description:
      "Check out our blog for all information regarding the foundation and it's events!",
    url: "http://www.hhlfoundation.org/blog",
    siteName: "Events | Hassan and Hussein Lecky Foundation",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    twitter: {
      card: "summary_large_image",
      title: "Events | Hassan and Hussein Lecky Foundation",
      description:
        "Check out our blog for all information regarding the foundation and it's events!",
      creator: "@hhlfoundation",
      // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
  },
};

const page = () => {
  return (
    <main>
      <BlogHero />
      <BlogList />
    </main>
  );
};

export default page;
