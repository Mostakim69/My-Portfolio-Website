import React, { useRef } from 'react';

const Education = () => {
  const cardRefs = [useRef(null), useRef(null)]; // Refs for the two cards

  const handleMouseMove = (e, cardRef) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    // Calculate the mouse position relative to the card's center
    const mouseX = e.clientX - rect.left - cardWidth / 2;
    const mouseY = e.clientY - rect.top - cardHeight / 2;

    // Calculate rotation angles (reduced for subtler effect)
    const rotateX = (mouseY / cardHeight) * 15; // Reduced from 20 for smoother tilt
    const rotateY = (mouseX / cardWidth) * -15; // Reduced from 20 for smoother tilt

    // Apply the transform with smooth easing
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (cardRef) => {
    const card = cardRef.current;
    if (!card) return;

    // Reset the transform with smooth easing
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      id="Education-section"
      className="min-h-screen px-4 py-20 text-center text-white"
    >
      <h1 className="text-4xl font-bold mb-4">Education Journey</h1>
      <p className="text-lg mb-8">My academic path and specialization in science and technology disciplines</p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Secondary School Certificate Section */}
        <div
          ref={cardRefs[0]}
          className="bg-blue-900 p-6 rounded-lg shadow-lg w-full md:w-1/3 transition-transform duration-300 ease-out cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, cardRefs[0])}
          onMouseLeave={() => handleMouseLeave(cardRefs[0])}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl">🎓</span>
          </div>
          <h3 className="text-xl font-semibold">Secondary School Certificate (SSC)</h3>
          <p className="text-sm text-gray-400">Mohishkundi High School <br /> Mohanpur, Rajshahi</p>
          <p className="text-sm text-gray-400">2019 - 2020</p>
          <hr className="my-4 border-gray-700" />
          <h4 className="text-md font-medium">Achievements & Focus</h4>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="bg-blue-800 p-2 rounded-md mb-2 md:mb-0 md:mr-2">
              <ul className="text-left space-y-1">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🌟</span> GPA: 5.00 (Science)
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">📚</span> Physics, Chemistry
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 p-2 rounded-md">
              <ul className="text-left space-y-1">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">💻</span> ICT
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">📈</span> Math, Higher Math
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diploma in Engineering Section */}
        <div
          ref={cardRefs[1]}
          className="bg-green-900 p-6 rounded-lg shadow-lg w-full md:w-1/3 transition-transform duration-300 ease-out cursor-pointer"
          onMouseMove={(e) => handleMouseMove(e, cardRefs[1])}
          onMouseLeave={() => handleMouseLeave(cardRefs[1])}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl">🎓</span>
          </div>
          <h3 className="text-xl font-semibold">Diploma in Engineering</h3>
          <h2 className="text-sm">Computer Science & Technology</h2>
          <p className="text-sm text-gray-400">Rajshahi Polytechnic Institute</p>
          <p className="text-sm text-gray-400">2020 - 2024</p>
          <hr className="my-4 border-gray-700" />
          <h4 className="text-md font-medium">Achievements & Focus</h4>
          <div className="flex flex-col md:flex-row justify-between mt-2">
            <div className="bg-green-800 p-2 rounded-md mb-2 md:mb-0 md:mr-2">
              <ul className="text-left space-y-1">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🌟</span> CGPA: 3.75 (CST)
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">📜</span> JavaScript Programming
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🐍</span> Python Programming
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🔷</span> C# Programming
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">🌐</span> PHP Programming
                </li>
              </ul>
            </div>
            <div className="bg-green-800 p-2 rounded-md">
              <ul className="text-left space-y-1">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">☕</span> Java Programming
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">🌍</span> Web Development
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">🎨</span> Frontend Development
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">⚛️</span> MERN Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Progression Bar */}
      <div className="mt-12">
        <h4 className="text-md font-medium mb-4">Academic Progression</h4>
        <div className="bg-gray-800 rounded-full h-6 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-3/4 rounded-full"></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>🎓 Science (2019-2020)</span>
          <span>🎓 Computer Science (2020-2024)</span>
          <span>🎯 Specialization (Future)</span>
        </div>
      </div>
    </div>
  );
};

export default Education;