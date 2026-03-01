import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amitoj Singh - Software Developer",
  description:
    "Backend developer specializing in scalable systems and integrations.",
  
    openGraph: {
    title: "Amitoj Singh - Software Developer",
    description:
      "Backend developer specializing in scalable systems and integrations.",
    url: "https://amitoj-singh.me/",
    siteName: "Amitoj Singh Portfolio",
    images: [
      {
        url: "https://amitoj-singh.me/og-profile.png",
        width: 1200,
        height: 630,
        alt: "Amitoj Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
