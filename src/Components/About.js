import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};




const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};



function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hello, I'm Vaibhav Tukaram Gitte, a passionate Web developer with a keen eye for Full
            Stack Web Development. With a background in IT, I strive to create impactful and
            visually stunning Software solutions that leave a lasting impression.I Have completed my degree currently.
          </p>
        </motion.div>
        <br />
        <motion.div variants={itemVariants}>
          <h1 className="text-green-600 font-semibold text-xl">
            Education & Training
          </h1>
          <span>
            [B.Tech in Information Technology], [Dr Babasaheb Ambedkar Technological University], 
          </span>
        </motion.div>
        <br />
        <br />
        <motion.div variants={itemVariants}>
          <h1 className="text-green-600 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span>
            Proficient in [Python programming] Experienced with [Software
            Tools/Technologies] Strong grasp of [Design Principles/Concepts]
            Excellent problem-solving skills Effective communicator and
            collaborator.
          </span>
        </motion.div>
        <br />
        <br />
        <motion.div variants={itemVariants}>
          <h1 className="text-green-600 font-semibold text-xl">
            Professional Experience
          </h1>
          <span>
            [Full Stack Developer], [Bhabha Atomic Resaerch Centre],I completed a five-month
             internship at Bhabha Atomic Research Centre, where I developed a native cross-platform
        desktop application using React.js and Electron.js. I utilized Elasticsearch and Kibana  data 
        visualization and Python for backend integration. This experience allowed me to gain
         proficiency in various technologies and significantly enhance my skills in web and
          application development. Through this internship, I successfully delivered a fully 
          functional desktop application, demonstrating my ability to manage the full development
           lifecycle and contribute effectively to complex projects.
          </span>
        </motion.div>
        <br />
        <br />
        <motion.div variants={itemVariants}>
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative [Your Field] solutions that exceed client expectations and
            contribute positively to the digital landscape. I am committed to
            continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
