import React from "react";
import { motion } from "framer-motion";
import blog from "../Project/blog.jpg";
import doc from "../Project/document.jpg";
import food from "../Project/food.png";
import news from "../Project/news.jpeg";
import project from "../Project/project.png";
import resume from "../Project/resume.jpg";
import task from "../Project/task.png";
import textcon from "../Project/text convertor.png";
import village from "../Project/village.jpeg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      image: blog,
      name: "Blogshpere",
      description: "A web application that enables users to create beautiful blogs for future reference. It includes features for deleting and updating blog posts and incorporates a carousel and card layout on the homepage. The application also allows users to provide feedback.",
      sourceCodeLink: "https://github.com/VaibhavTGitte17/BlogApplication.git"
    },
    {
      id: 2,
      image: doc,
      name: "DocumentDesk Application",
      description: "A desktop application that allows users to efficiently manage folders and documents on their computer. Users can configure a root folder and create new folders within it, as well as copy documents into these folders",
     
      sourceCodeLink: "https://github.com/VaibhavTGitte17/DocumentManager.git"
    },
    {
      id: 3,
      image: village,
      name: "Desktop VillageManager",
      description: "Manage village records and resources efficiently. This application is developed using ReactJS, Material-UI, Django, and ElectronJS, etc.",
      
      sourceCodeLink: "https://github.com/VaibhavTGitte17/DesktopVillageApp.git"
    },
    {
      id: 4,
      image: news,
      name: "News Application",
      description: "A real-time news application for fetching latest news. This application is developed used reactjs and restapi. ",
     
      sourceCodeLink: "#"
    },
    {
      id: 5,
      image: project,
      name: "Project Hub Application",
      description: "Manage your projects efficiently with this application. This application helps users for managing and keeping records of how many projects he has done. In this application he can add projects.",
     
      sourceCodeLink: "https://github.com/VaibhavTGitte17/ProjectAddApplication.git"
    },
    {
      id: 6,
      image: resume,
      name: "Resume Uploader",
      description: "This is built using plain HTML, CSS, JavaScript, Bootstrap, and Django. In this application, users can upload resumes and keep records.",
      
      sourceCodeLink: "https://github.com/VaibhavTGitte17/ResumeUploader.git"
    },
    {
      id: 7,
      image: task,
      name: "Task Manager Application",
      description: "This application helps us manage our daily tasks. In this application, users can add and delete tasks after completion.",
      
      sourceCodeLink: "https://github.com/VaibhavTGitte17/TaskManager.git"
    },
    {
      id: 8,
      image: textcon,
      name: "TextTransformer",
      description: "This application allows users to convert text to uppercase, lowercase, and also delete blank spaces. Users can download the PDF for its use.",
     
      sourceCodeLink: "https://github.com/VaibhavTGitte17/TextUtilApp.git"
    },
    {
      id: 9,
      image: food,
      name: "Food Website",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus hic corrupti odio assumenda voluptatibus alias esse beatae accusantium dolorum nisi.",
     
      sourceCodeLink: "https://github.com/VaibhavTGitte17/FoodWebsite-Reactjs-MUI.git"
    }
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">Personal Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
        {cardItem.map(({ id, image, name, description,  sourceCodeLink }) => (
          <motion.div
            className="md:w-[350px] md:h-[500px] border-[2px] rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col"
            key={id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={image} className="w-full h-64 object-cover" alt={name} />
            <div className="p-4 flex flex-col flex-grow">
              <div className="text-lg font-bold mb-2 text-red-500 hover:underline text-center mt-auto">{name}</div>
              <p className="text-gray-700 mb-4 flex-grow">{description}</p>
              <div className="flex justify-between mt-auto">
                
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
