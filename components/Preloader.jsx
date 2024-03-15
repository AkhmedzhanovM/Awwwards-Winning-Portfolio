"use client";

import { motion } from "framer-motion";
import { slideUp } from "@/utils/motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height + 100
  } Q${dimension.width / 2} ${dimension.height} 0 ${
    dimension.height + 100
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      className="bg-[#e9dfce] h-[100vh] w-[100vw] z-[101] fixed flex justify-center items-center"
    >
      {dimension.height > 0 && (
        <>
          <h2 className="text-[#1e2125] text-[20px]">Ахмеджанов</h2>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              d={initialPath}
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
