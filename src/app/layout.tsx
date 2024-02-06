import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import ActiveSectionContextProvider from "../context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/ThemeSwitch";
import ThemeContextProvider from "../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon N Sangma | Personal Portfolio",
  description: "Brandon is a full-stack developer with 5 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`
          ${inter.className} 
          bg-gray-50 
            text-gray-950 
            pt-28 
            sm:pt-36
            dark:bg-gray-900
            dark:text-gray-50
            dardk:
            text-opacity-90
          `}
      >
        <div
          className="
        bg-[#fbe2e3]
          absolute 
          -z-10
          top-[-6rem] 
          right-[11rem] 
          h-[31.25rem] 
          w-[31.25rem] 
          rounded-full 
          blur-[10rem]
          sm:w-[68.75rem]
        dark:bg-[#946263]

        "
        ></div>
        <div
          className="
        bg-[#dbd7fb]
        dark:bg-[#676394]
          absolute 
          top-[-1rem] 
          left-[-35rem] 
          h-[31.25rem] 
          w-[50rem] 
          -z-10
          rounded-full 
          blur-[10rem]
          sm:w-[68.75rem]
          md:left-[-33rem]
          lg:left-[-28rem]
          xl:left-[-15rem]
          2xl:left-[-5rem]
        "
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
