import React from "react";
import Slider from "react-slick";
import batu from "../Blog/batu.jpg";
import django from "../Blog/django.png";
import elastic from "../Blog/elastic.png";
import electron from "../Blog/electronjs.jpg";
import python from "../Blog/python.jpeg";
import react from "../Blog/reactjs.jpeg";

function Contact() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set to 2 seconds
    responsive: [
      {
        breakpoint: 1024, // For large devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For medium devices
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // For small devices
        settings: {
          slidesToShow: 1, // Show only one blog post on small devices
        },
      },
    ],
  };

  const cards = [
    {
      image: batu,
      title: "Batu",
      description:
        "The University is committed to provide quality technical education, research and development services to meet the needs of industry, business, service sector and society, at large. The University is committed to become a leading 'Center of Excellence' in the field of Engineering, Technology and Science as a seat of learning.",
    },
    {
      image: django,
      title: "Django",
      description:
        "Django is a high-level web framework written in Python that encourages rapid development and clean, pragmatic design. It follows the Model-View-Controller (MVC) architectural pattern, emphasizing reusability, rapid development, and the principle of DRY. Django's main goal is to ease the creation of complex.",
    },
    {
      image: elastic,
      title: "Elastic",
      description:
        "Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents. It is built on top of the Lucene library and offers a robust set of features to efficiently index, search, and analyze large volumes.",
    },
    {
      image: electron,
      title: "Electron",
      description:
        "Electron is a free and open-source software framework developed and maintained by OpenJS Foundation. The framework is designed to create desktop applications using web technologies that are rendered using a version of the Chromium browser engine and a back end using the Node.js runtime environment.",
    },
    {
      image: python,
      title: "Python",
      description:
        "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.",
    },
    {
      image: react,
      title: "React",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    },
  ];

  return (
    <div
      name="Blog"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 bg-gray-900 text-white"
    >
      <h1 className="text-3xl font-bold mb-5 text-center">My Personal Blog</h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center justify-center h-full"> {/* Ensure height adjusts */}
              <img
                src={card.image}
                alt={card.title}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4" 
              />
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-900 mb-4 flex-grow text-justify">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Contact;
