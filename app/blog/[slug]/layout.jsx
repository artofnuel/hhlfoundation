export const metadata = {
  title: "Blog Post | Hassan and Hussein Lecky Foundation",
  description:
    "Check out our blog for all information regarding the foundation and it's events!",
  alternates: {
    // canonical: "/blog",
    languages: {
      "en-US": "/en-US",
    },
  },
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Blog Post | Hassan and Hussein Lecky Foundation",
    description:
      "Check out our blog for all information regarding the foundation and it's events!",
    // url: "http://www.hhlfoundation.org/blog",
    siteName: "Blog Post | Hassan and Hussein Lecky Foundation",
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
      title: "Blog Post | Hassan and Hussein Lecky Foundation",
      description:
        "Check out our blog for all information regarding the foundation and it's events!",
      creator: "@hhlfoundation",
      // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
  },
};
export default function Layout({ children }) {
  return <main>{children}</main>;
}
