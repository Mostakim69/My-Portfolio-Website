import React from "react";
import { Link } from "react-scroll";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillInstagram: AiFillInstagram,
  };

  return (
    <div className="mb-28 h-auto w-full sm:mb-0 md:h-screen flex items-center justify-center">
      <div className="mx-auto flex w-[90%] flex-col-reverse items-center sm:flex-row lg:w-[80%] lg:justify-between">
        {/* === Left Section === */}
        <div className="w-full text-center sm:text-left mt-10 sm:mt-0">
          <h2 className="text-3xl font-semibold text-gray-900 lg:text-3xl">
            Welcome! <span className="wave text-5xl">👋</span>
          </h2>
          <h2 className="pt-2 text-2xl font-semibold text-gray-900">
            I’m{" "}
            <span className="pt-2 text-4xl font-bold text-blue-600">
              {UserData.name}
            </span>
          </h2>
          <p className="mt-2 text-lg text-gray-700 max-w-xl mx-auto sm:mx-0">
            A passionate Frontend Developer crafting elegant, responsive, and user-friendly web interfaces.
          </p>

          <TypewriterText />
          <div className="mt-6 flex gap-4 justify-center sm:justify-start">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="text-xl p-2 rounded-full bg-white shadow-md hover:bg-blue-100 transition duration-300 text-gray-700 hover:text-blue-600"
                  key={index}
                  onClick={() => window.open(data.url)}
                >
                  <IconComponent />
                </button>
              );
            })}
          </div>
          <Link
            activeClass="active"
            to="Contact-section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="mt-8 cursor-pointer inline-block button-UI text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* === Banner Image Section === */}
        <div className="w-full sm:w-[50%] flex justify-center">
          <img
            className="w-[90%] max-w-md sm:max-w-lg lg:max-w-xl rounded-xl object-cover"
            src="https://i.postimg.cc/PqNFqmhK/1-1.png"
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
