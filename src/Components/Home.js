import React from "react";
import { motion } from "framer-motion";
import pic from "../Images/swaraj.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import {ReactTyped} from "react-typed";

function Home() {
  const iconVariants = {
    hover: {
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 0.6,
        repeat: Infinity,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.span className="text-xl" variants={textVariants}>
              Welcome to My Website
            </motion.span>
            <motion.div className="flex space-x-1 text-2xl md:text-4xl" variants={textVariants}>
              <h1>Hello I am a </h1>

              <ReactTyped
                className="text-sky-700 font-bold"
                strings={["Web Developer", "Programmer", "Coder", "learner"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </motion.div>
            <br />
            <motion.p className="text-sm md:text-md text-justify" variants={textVariants}>
              As a highly motivated and skilled Full Stack Developer, I possess
              a robust understanding of both frontend and backend development,
              allowing me to build comprehensive and efficient web and
              application solutions. My diverse technical background, combined
              with hands-on experience, enables me to tackle complex development
              challenges and deliver high-quality results.
            </motion.p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <motion.li
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="group"
                    >
                      <FaSquareFacebook className="text-3xl md:text-4xl cursor-pointer text-blue-600 transition-colors duration-300" />
                    </a>
                  </motion.li>
                  <motion.li
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <a
                      href="https://www.linkedin.com/in/vaibhav-gitte-81b06621b/"
                      target="_blank"
                      className="group"
                    >
                      <FaLinkedin className="text-3xl md:text-4xl cursor-pointer text-blue-700 transition-colors duration-300" />
                    </a>
                  </motion.li>
                  <motion.li
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      className="group"
                    >
                      <IoLogoYoutube className="text-3xl md:text-4xl cursor-pointer text-red-600 transition-colors duration-300" />
                    </a>
                  </motion.li>
                  <motion.li
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <a href="https://t.me/" target="_blank" className="group">
                      <FaTelegram className="text-3xl md:text-4xl cursor-pointer text-blue-400 transition-colors duration-300" />
                    </a>
                  </motion.li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <SiMongodb className="text-3xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-500 transition-colors duration-300" />
                  </motion.div>
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <SiExpress className="text-3xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-gray-500 transition-colors duration-300" />
                  </motion.div>
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <FaReact className="text-3xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-blue-500 transition-colors duration-300" />
                  </motion.div>
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <FaNodeJs className="text-3xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-500 transition-colors duration-300" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1"
            initial="initial"
            animate="animate"
            variants={imageVariants}
          >
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
