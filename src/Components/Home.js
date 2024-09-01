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
import { ReactTyped } from "react-typed";

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
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10 bg-gray-900 text-white"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <motion.div
            className="md:w-1/2 space-y-4 md:space-y-6 mt-10 md:mt-20 order-2 md:order-1"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.span className="text-lg md:text-xl" variants={textVariants}>
              Welcome to My Website
            </motion.span>
            <motion.div
              className="flex space-x-2 text-2xl md:text-4xl"
              variants={textVariants}
            >
              <h1>Hello, I am a </h1>
              <ReactTyped
                className="text-sky-700 font-bold"
                strings={["Web Developer", "Programmer", "Coder", "Learner"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </motion.div>
            <motion.p
              className="text-sm md:text-md text-justify md:max-w-md"
              variants={textVariants}
            >
              As a highly motivated and skilled Full Stack Developer, I possess
              a robust understanding of both frontend and backend development,
              allowing me to build comprehensive and efficient web and
              application solutions. My diverse technical background, combined
              with hands-on experience, enables me to tackle complex development
              challenges and deliver high-quality results.
            </motion.p>
            {/* Social media icons */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0 md:space-x-12">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  {[
                    {
                      href: "https://www.facebook.com/",
                      icon: (
                        <FaSquareFacebook className="text-3xl md:text-4xl cursor-pointer text-blue-600 transition-colors duration-300" />
                      ),
                    },
                    {
                      href: "https://www.linkedin.com/in/vaibhav-gitte-81b06621b/",
                      icon: (
                        <FaLinkedin className="text-3xl md:text-4xl cursor-pointer text-blue-700 transition-colors duration-300" />
                      ),
                    },
                    {
                      href: "https://www.youtube.com/",
                      icon: (
                        <IoLogoYoutube className="text-3xl md:text-4xl cursor-pointer text-red-600 transition-colors duration-300" />
                      ),
                    },
                    {
                      href: "https://t.me/",
                      icon: (
                        <FaTelegram className="text-3xl md:text-4xl cursor-pointer text-blue-400 transition-colors duration-300" />
                      ),
                    },
                  ].map(({ href, icon }, index) => (
                    <motion.li key={index} variants={iconVariants} whileHover="hover">
                      <a href={href} target="_blank" rel="noopener noreferrer" className="group">
                        {icon}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  {[
                    <SiMongodb className="text-3xl md:text-4xl text-green-500" />,
                    <SiExpress className="text-3xl md:text-4xl text-gray-500" />,
                    <FaReact className="text-3xl md:text-4xl text-blue-500" />,
                    <FaNodeJs className="text-3xl md:text-4xl text-green-500" />,
                  ].map((icon, index) => (
                    <motion.div key={index} variants={iconVariants} whileHover="hover">
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:ml-12 mt-8 order-1 md:order-2"
            initial="initial"
            animate="animate"
            variants={imageVariants}
          >
            <img
              src={pic}
              className="rounded-full w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] object-cover"
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
