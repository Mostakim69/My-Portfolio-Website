import React, { useRef } from 'react';

const Project = () => {
  const projects = [
    {
      title: "Tour & Travel Related Website: TourNest BD (Frontend| MERN Stack)",
      desc: "To develop an online platform providing detailed information about tourism in Bangladesh, helping travelers explore destinations, plan trips easily, and experience local culture and activities.",
      img: "https://i.postimg.cc/7LhxVY54/Screenshot-2025-08-04-205453.png",
      link: "https://tour-nest-bd.web.app/",
      github: "https://github.com/Mostakim69/TourNest-BD"
    },
    {
      title: "Hobby Related Website: HobbyHub (Frontend | MERN Stack)",
      desc: "To build a platform that allows users to discover, join, and create hobby-based groups, fostering meaningful connections and vibrant communities around shared passions and interests.",
      img: "https://i.postimg.cc/659T5KTY/Screenshot-2025-06-30-103030.png",
      link: "https://happy-family-4d585.web.app/",
      github: "https://github.com/Mostakim69/HobbyHub"
    },
    {
      title: "Group-Study Related Website: FriendAssign (Frontend | MERN Stack)",
      desc: "Purpose: To create a collaborative online platform where friends can assign, complete, and evaluate each other’s work, making group study more engaging, organized, and productive.",
      img: "https://i.postimg.cc/Vk2YMPLy/Screenshot-2025-06-30-103639.png",
      link: "https://assignmen-11-app.web.app/assignments",
      github: "https://github.com/Mostakim69/FriendAssign"
    },
    {
      title: "HealthCare",
      desc: "A responsive healthcare website for patient appointment and info.",
      img: "https://i.postimg.cc/Gh5rwnDB/Screenshot-2025-06-30-103857.png",
      link: "https://peaceful-sunflower-7c0320.netlify.app/",
      github: "https://github.com/Mostakim69/HealthCare"
    },
    {
      title: "MagicGallery",
      desc: "An NFT gallery with preview, short links, and tracking features.",
      img: "https://i.postimg.cc/qqFFY0F4/Screenshot-2025-06-30-104914.png",
      link: "https://glittery-narwhal-d69e72.netlify.app/",
      github: "https://github.com/username/magicgallery"
    },
    {
      title: "Learn Vocabularies",
      desc: "A fun app to learn and practice vocabulary step by step.",
      img: "https://i.postimg.cc/BQxyNWg9/Screenshot-2025-06-30-105426.png",
      link: "https://assignment-a06-b11.netlify.app/",
      github: "https://github.com/username/learn-vocabularies"
    },
    {
      title: "DevBoard",
      desc: "A dashboard to monitor and manage social media content.",
      img: "https://i.postimg.cc/9M71MTg5/Screenshot-2025-06-30-105718.png",
      link: "https://mostakim69.github.io/assignment-05/",
      github: "https://github.com/username/devboard"
    },
  ];

  const handleViewClick = (link) => {
    window.open(link, '_blank');
  };

  const handleCodeClick = (github) => {
    window.open(github, '_blank');
  };

  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 10;

    const tiltX = (y - centerY) / centerY * maxTilt;
    const tiltY = -(x - centerX) / centerX * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-10 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl text-white font-bold mb-6">Projects.</h1>
        <p className="text-sm sm:text-base text-gray-300">
          Following projects showcase my skills and experience through five demo examples of my work. <br />
          It reflects my ability to solve complex problems, work with different technologies, and manage <br />
          projects more effectively.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
        {projects.map((project, index) => {
          const cardRef = useRef(null);
          return (
            <div
              key={index}
              ref={cardRef}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
            >
              <img src={project.img} alt={project.title} className="w-full h-40 sm:h-48 lg:h-52 object-cover" />
              <div className="p-4">
                <h2 className="text-lg text-white sm:text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm sm:text-base">{project.desc}</p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleViewClick(project.link)}
                    className="flex items-center text-blue-400 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Project
                  </button>
                  <button
                    onClick={() => handleCodeClick(project.github)}
                    className="flex items-center text-blue-400 hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    GitHub Code
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;