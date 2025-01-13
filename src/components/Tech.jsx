import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { styles } from "../styles";
import {motion} from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "../constants";

const iconVariants = (duration) => ({
  initial: {y:-8},
  animate: {
    y: [8, -8],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className='flex flex-wrap mt-8 items-center justify-center gap-4 px-2 md:px-12'>
      {technologies.map((technology, index) => (
        <motion.div
          key={index}
          variants={iconVariants(technology.duration)}
          initial="initial"
          animate="animate"
          className='flex items-center rounded-2xl border-4 border-neutral-800 p-2 gap-1'>
            <technology.icon className='text-xl' style={{ color: technology.color }} />
            <span className="text-sm font-medium text-white">{technology.name}</span>
        </motion.div>
      ))}
      </div>
    </>
  )
}

export default Tech