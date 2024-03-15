"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { up } from "@/utils/motion";

const Hero = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex md:flex-row sm:flex-col justify-around items-center">
      <div className="flex flex-col relative md:top-12 sm:top-60">
        <div className="overflow-hidden">
          <motion.h2
            variants={up}
            initial="initial"
            animate="animate"
            className="font-degular text-[20px] text-[#e9dfce] relative top-8"
          >
            FRONTEND DEVELOPER
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={up}
            initial="initial"
            animate="animate"
            className="font-grandslang md:text-[80px] sm:text-[40px] text-[#e9dfce] md:leading-[80px]  relative top-10"
          >
            CREATING
            <br />
            DELIGHTFUL
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            variants={up}
            initial="initial"
            animate="animate"
            className="font-grandslangitalic md:text-[60px] sm:text-[50px] text-[#e9dfce] relative top-4"
          >
            experiences
          </motion.h2>
        </div>
        <div className="flex flex-row items-center overflow-hidden">
          <motion.h2
            variants={up}
            initial="initial"
            animate="animate"
            className="font-migraitalic text-[20px] text-[#e9dfce] pr-2"
          >
            for your
          </motion.h2>
          <motion.h2
            variants={up}
            initial="initial"
            animate="animate"
            className="font-migrabold text-[60px] text-[#e9dfce]"
          >
            business
          </motion.h2>
        </div>
      </div>
      <div className="z-[10]">
        <Image src="/images/person.png" width={300} height={300}/>
      </div>
    </div>
  );
};

export default Hero;
