import { motion } from "framer-motion";

import { styles } from "../styles";
import profilePic from '../assets/dharanakProfile.png'
import githubIcon from '../assets/icons/github-dark.svg';
import linkedinIcon from '../assets/icons/linkedin-dark.svg';
import CV from '../assets/DharanaKashyapResume.pdf';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[90px] lg:top-[30px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-start lg:items-center gap-5`}
      >
        <div className="flex flex-row items-start gap-5 lg:w-3/4">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 h-40 lg:h-80 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Dharana</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              My journey as a&nbsp;
              <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl md:text-3xl tracking-tight text-transparent'>
                software engineer
              </span>
              &nbsp;is guided by curiosity and a desire to innovate and build a better tomorrow, <br className="lg:block hidden"/> one line of code at a time.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com/dharanakneu" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="Github icon" className="w-12 h-12 transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              </a>
              <a href="https://www.linkedin.com/in/dharanakashyap/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn icon" className="w-12 h-12 transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              </a>
              <a href={CV} download>
                <button className='ml-2 bg-white py-2 px-6 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary transition-transform duration-300 hover:scale-110 hover:opacity-80'>Download CV</button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-1/2 mt-5 md:mt-0 lg:mt-0">
          <img
                src={profilePic}
                alt="Dharana Kashyap"
                className="w-full max-w-xs lg:max-w-md rounded-2xl"
              />
        </div>
      </div>

      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero