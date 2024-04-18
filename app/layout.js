import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hassan and Hussein Lecky Foundation",
  description: "Empowering the youth",
  metadataBase: new URL("https://www.hhlfoundation.org"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Hassan and Hussein Lecky Foundation",
    description: "Empowering the youth",
    url: "http://www.hhlfoundation.org",
    siteName: "Hassan and Hussein Lecky Foundation",
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
      title: "Hassan and Hussein Lecky Foundation",
      description: "Empowering the youth",
      creator: "@hhlfoundation",
      // images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
