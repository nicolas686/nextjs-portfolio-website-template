// pages/index.js
import Head from "next/head";
// Import components (static first, heavy ones dynamically)
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>
          ProfileX – React & Next.js Portfolio Template for Designers, Developers & Creatives
        </title>
        <meta name="description"
          content="A morden React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness." />
        <link rel="canonical" href="https://themixly.com/preview/2067/portfolio-react-nextjs-template" />

        <meta name="author" content="ProfileX" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProfileX" />
        <meta property="og:title"
          content="ProfileX – React & Next.js Portfolio Template for Designers, Developers & Creatives" />
        <meta property="og:description"
          content="A morden React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness." />
        <meta property="og:url" content="https://themixly.com/preview/2067/portfolio-react-nextjs-template/" />
        <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/08/Artboard-2-3-scaled.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title"
          content="ProfileX – React & Next.js Portfolio Template for Designers, Developers & Creatives" />
        <meta name="twitter:description"
          content="A morden React & Next.js portfolio template for designers, developers, and creatives — built with Tailwind CSS for speed, modern design, and responsiveness." />
        <meta name="twitter:url" content="https://themixly.com/preview/2067/portfolio-react-nextjs-template/" />
        <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/08/Artboard-2-3-scaled.jpg" />

      </Head>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
