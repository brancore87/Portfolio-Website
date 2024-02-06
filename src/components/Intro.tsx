"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import profilePic from "../assets/me.jpg";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/ActiveSectionContextProvider";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="
        mb-28 max-w-[50rem]
        text-center 
        sm:mb-0
        scroll-mt-[100rem]
    "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="profile picture"
              quality="95"
              width="192"
              height="192"
              priority={true}
              className="
                rounded-full
                h-24 w-24 
                border-[0.35rem] border-white 
                object-cover 
                shadow-xl
            "
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="
          mb-10 mt-4
          px-4 
          text-2xl 
          font-medium 
          !leading-[1.5]
          sm:text-4xl
      "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 10, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Brandon.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="font-bold">React | Next.js</span>.
      </motion.h1>

      <motion.div
        className="
          flex 
          flex-col 
          justify-center
          items-center
          gap-2 
          px-4
          text-lg
          font-medium
          sm:flex-row
      "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="
            group
            flex 
            items-center
            bg-gray-900
            text-white
            px-7
            py-3
            gap-2
            rounded-full
            outline-none
            focus:scale-110
            hover:scale-110
          hover:bg-gray-950
            active:scale-105
            transition
          "
          onClick={() => {
            setActiveSection("Contact");
          }}
        >
          Contact me here
          <BsArrowRight
            className="
              opacity-70
              group-hover:translate-x-1 
              transition
          "
          />
        </Link>

        <a
          className="
            group
            flex 
            items-center
            bg-white
            px-7
            py-3
            gap-2
            rounded-full
            outline-none
            focus:scale-110
            hover:scale-110
            active:scale-105
            transition
            cursor-pointer
            border border-black/10
          
          dark:bg-white/10
          "
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload
            className="
              opacity-70
              group-hover:translate-y-1
              transition
            "
          />
        </a>

        <a
          className="
            group-hover:
            flex 
            items-center
            bg-white
            p-4
            gap-2
            rounded-full
            text-gray-700
            focus:scale-[1.15]
            hover:scale-[1.15]
            active:scale-105
            hover:text-gray-950
            transition
            cursor-pointer
            border border-black/10
            dark:bg-white/10
            dark:text-white/60
          "
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="
            flex 
            items-center
            bg-white
            p-4
            gap-2
            rounded-full
            text-gray-700
            focus:scale-[1.15]
            hover:scale-[1.15]
            active:scale-105
            hover:text-gray-950
            transition
            cursor-pointer
            border border-black/10
            dark:bg-white/10
            dark:text-white/60
          "
          href="https://github.com"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
