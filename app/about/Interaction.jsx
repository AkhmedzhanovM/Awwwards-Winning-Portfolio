"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { interaction1 } from "@/utils/motion";

const Interaction = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const textMove1 = useTransform(scrollYProgress, [0, 1], [1, -50]);
  const textMove2 = useTransform(scrollYProgress, [0, 1], [1, -100]);
  const textMove3 = useTransform(scrollYProgress, [0, 1], [1, 50]);
  const textMove4 = useTransform(scrollYProgress, [0, 1], [1, 100]);

  return (
    <div
      ref={container}
      className="md:h-[150vh] sm:h-[100vh] w-[100vw] flex flex-col justify-center items-center text-[#e9dfce] ml-10"
    >
      <motion.h2
        style={{ x: textMove1 }}
        className="md:text-[15px] sm:text-[10px] font-degular md:mr-[800px] sm:mr-[200px] top-20 relative sm:mb-4"
      >
        * SPECIALIZING IN MOBILE APPS,
        <br />
        WEBSITES AND PRODUCT DESIGN *
      </motion.h2>

      <motion.h1
        variants={interaction1}
        initial="initial"
        whileInView="enter"
        viewport={{once: true}}
        style={{ x: textMove2 }}
        className="md:text-[150px] sm:text-[55px] font-grandslang md:leading-[300px] sm:leading-[200px]"
      >
        INTERACTION
        <br />
        <span className="font-grandslangitalic">The Beaty</span>
      </motion.h1>

      <motion.h2
        style={{ x: textMove3 }}
        className="font-migraitalic md:text-[40px] sm:text-[20px] absolute md:mr-96 mt-40"
      >
        inspired by
      </motion.h2>

      <motion.h1
        style={{ x: textMove4 }}
        className="md:text-[100px] sm:text-[50px] font-grandslangitalic absolute mt-80 md:ml-40 md:leading-[300px] sm:leading-[200px] md:mb-0 sm:mb-20"
      >
        developer
        <br />
        <span className="md:text-[40px] sm:text-[20px] md:ml-40">of</span>
        Nature
      </motion.h1>
    </div>
  );
};

export default Interaction;
