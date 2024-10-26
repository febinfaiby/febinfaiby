import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import SEO from './SEO'

const Home = () => {
  return (
    <>
      <SEO /> {/* This applies meta tags and title from the SEO component */}
      
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[900px] mx-auto sm:px-16 px-4 flex flex-col justify-center h-full">
          
          <p className="text-white">
            <span className="bg-blue-600 text-white inline-block px-2 py-1 rounded-md">
              Hi, there, my name is:
            </span>
          </p>
          
          <h1 className="text-3xl sm:text-7xl font-bold text-[#ccd6f6]">
            Febinfaiby
          </h1>
          
          <h4 className="text-2xl sm:text-4xl font-bold text-[#8892b0]">
            Sr. Performance Marketing Specialist<br />& React Js Developer.
          </h4>
          
          <p className="text-[#8892b0] sm:text-[1rem] text-[10px] py-4 max-w-[700px]">
            With over 3+ years of hands-on experience in driving customer
            acquisition and revenue growth through digital advertising, I have
            honed my skills in leveraging the power of Google and Meta platforms.
            My analytical approach and continuous optimization strategies have
            consistently improved campaign performance, leading to significant ROI
            increases for my clients. Best digital marketing freelancer in Kerala.
          </p>

          {/* Button to View Work */}
          <div>
            <Link to="skills1" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>

          {/* Social Links (Visible on mobile only) */}
          <div className="flex lg:hidden mt-5">
            <ul className="flex space-x-4">
              <li className="w-[60px] h-[60px] flex justify-center items-center bg-[#333333] rounded-full">
                <a
                  className="flex justify-center items-center w-full text-gray-300"
                  target="_blank"
                  href="https://github.com/febinfaiby"
                  rel="noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </li>
              <li className="w-[140px] h-[60px] flex justify-between items-center bg-[#565f69] rounded-full">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/febin new resume.pdf"
                  download={true}
                >
                  Resume <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
