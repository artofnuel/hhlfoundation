import React from "react";
import ContactHero from "./components/ContactHero";
import Contactjs from "./components/Contactjs";

export const metadata = {
  title: "Contact Us | Hassan and Hussein Lecky Foundation",
  description:
    "Have questions or generally want to support us, feel free to fill the contact form",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-US": "/en-US",
    },
  },
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Contact Us | Hassan and Hussein Lecky Foundation",
    description:
      "Have questions or generally want to support us, feel free to fill the contact form",
    url: "http://www.hhlfoundation.org/contact",
    siteName: "Contact Us | Hassan and Hussein Lecky Foundation",
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
      title: "Contact Us | Hassan and Hussein Lecky Foundation",
      description:
        "Have questions or generally want to support us, feel free to fill the contact form",
      creator: "@hhlfoundation",
      // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
  },
};

const page = () => {
  return (
    <main className="w-full h-auto">
      <ContactHero />
      <Contactjs />
    </main>
  );
};

export default page;
