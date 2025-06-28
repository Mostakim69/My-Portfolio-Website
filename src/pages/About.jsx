import React from "react";
import { UserData } from "../data/UserData";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";

function About() {
  const { about } = UserData;

  return (
    <div className="mb-24 h-auto  sm:mb-0 md:min-h-screen flex items-center">
      <div className="mx-auto flex w-[90%] flex-col-reverse justify-between rounded-lg bg-transparent p-4 shadow-lg md:flex-row md:items-center lg:w-[80%]">
        
        {/* === Left Section (Text + Skills) === */}
        <div className="flex w-full flex-col md:w-[50%]">
          <p className="pb-2 mt-4 text-2xl font-semibold tracking-wide text-gray-900">
            About Me
          </p>
          <p className="font-poppins text-sm lg:text-base text-gray-700">
            {about}
          </p>

          {/* === Skills Marquee === */}
          <div className="mt-8">
            <Marquee
              gradient={false}
              speed={150}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.map((skill, id) => (
                <div
                  className="ml-4 flex h-24 w-24 flex-col items-center justify-center gap-2"
                  key={id}
                >
                  <img
                    className="h-[50px] w-[60px] bg-contain bg-no-repeat"
                    src={skillsImage(skill)}
                    alt={skill}
                  />
                  <p className="text-sm text-gray-600">{skill}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* === Right Section (Image) === */}
        <div className="flex justify-center w-full md:w-[50%]">
          <img
            className="w-full max-w-[500px] mt-4 md:mt-0 md:w-[350px] lg:w-[450px] lg:h-[450px] object-contain rounded-xl shadow-lg"
            src="https://i.postimg.cc/tg3TcVnR/IMG-20241224-232711-1.png"
            alt="about-me"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
