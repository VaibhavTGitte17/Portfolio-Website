import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html from "../Images/html.png";
import css from "../Images/css.jpg";
import python from "../Images/python.webp";
import reactjs from "../Images/reactjs.png";
import nodejs from "../Images/node.png";
import javascript from "../Images/javascript.png";
import django from "../Images/django.jpeg";
import electron from "../Images/electronjs.png";
import elastic from "../Images/elasticsearch.png";
import kibana from "../Images/kibana.png";
import bootstap from "../Images/Bootstrap.png";
import tailwind from "../Images/tailwind.png";
import mui1 from "../Images/mui.png";
import vite from "../Images/vite.png";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactjs, name: "ReactJs" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: bootstap, name: "Bootstrap" },
    { id: 7, logo: tailwind, name: "TailwindCSS" },
    { id: 8, logo: mui1, name: "MaterialUI" },
    { id: 9, logo: electron, name: "ElectronJs" },
    { id: 10, logo: vite, name: "Vite" },
    { id: 11, logo: elastic, name: "ElasticSearch" },
    { id: 12, logo: kibana, name: "Kibana" },
    { id: 13, logo: django, name: "Django" },
    { id: 14, logo: nodejs, name: "NodeJs" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to control when the animation triggers
  });

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 bg-gray-900 text-white"
    >
      <div ref={ref}>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="">
          I have worked on the following technologies.
        </p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cardItem.map(({ id, logo, name }) => (
            <motion.div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
              variants={cardVariants}
            >
              <img src={logo} className="w-[150px] rounded-full" alt={name} />
              <div className="text-center">{name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Experiance;
