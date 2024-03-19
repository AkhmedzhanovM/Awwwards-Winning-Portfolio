"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { navSlide } from "../utils/motion";
import menu from "../public/images/menu.svg";
import close from "../public/images/close.svg";
import Magnetic from "./Magnetic";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full fixed flex justify-between items-center md:px-20 sm:px-8 pt-6 z-[20]">
      <Magnetic>
        <Link href="/" className="text-[#e9dfce] text-[20px] cursor-pointer">Ахмеджанов</Link>
      </Magnetic>

      <div className="z-[100]">
        <Magnetic>
          <Image
            src={toggle ? close : menu}
            onClick={() => setToggle((prev) => !prev)}
            width={40}
            height={40}
            className="z-[20] cursor-pointer"
          />
        </Magnetic>
      </div>

      <motion.div
        variants={navSlide}
        initial="closed"
        animate={toggle ? "open" : "closed"}
        className="fixed bg-[#e9dfce] h-[100vh] w-[100vw] justify-center items-center top-0 left-0 flex flex-col"
      >
        <Link
          href="/works"
          className="text-[#242527] md:text-[100px] sm:text-[50px] font-grandslangitalic my-10"
        >
          WORKS
        </Link>
        <motion.a className="text-[#242527] md:text-[100px] sm:text-[50px] font-grandslangitalic my-10">
          ABOUT
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Navbar;
