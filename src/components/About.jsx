import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        After working for over four years in the industry, I am taking a significant step forward in my academic journey, pursuing a Master’s in Software Engineering Systems at Northeastern University.
        What began as a simple curiosity about technology has grown into a deep commitment to solving complex challenges and creating innovative solutions.
        Throughout my career, I have successfully driven projects in banking, financial services, and consumer data management, and showcased my skills in backend system modernization, microservices architecture, and data workflow optimization.
        I’ve worked with a range of technologies, including Java, .NET, Golang, Python and various DevOps tools, delivering scalable and efficient systems.
        <br/> Currently, I’m interning at Tesla as a Software Engineering Intern on the Tax &amp; Accounting Team, where I’m building backend systems that support Tesla’s global financial operations. 
        From designing APIs to integrating tax engines, I’m contributing to high-impact services that ensure accuracy, compliance, and performance across Tesla’s operations.
        <br/> <br/> If you’re equally passionate about creating innovative solutions, let’s connect and build something extraordinary together!
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

    </>
  )
}

export default SectionWrapper(About, "about");