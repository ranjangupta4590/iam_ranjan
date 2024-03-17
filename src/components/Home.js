

import PROFILE from "../Assets/gupta3.png";
import Resume from "../Assets/Ranjan_CV.pdf";
import bg from '../Assets/Projects/bg_video.mp4';
// import Typical from "react-typical";
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// import '../App.css';

const Home = () => {
  return (
    <div name="home" className="w-full md:h-screen bg-[#010206] ">
      {/* <div className=" overlay absolute left-0 top-0 w-[100%] h-[100%] "> */}
      <div className=" overlay w-[100%] h-[80%]  bg-opacity-80 bg-black z-10  ">

        <video src={bg} loop autoPlay muted className="absolute inset-0 w-[100%] h-[117%]  object-cover opacity-20 bg-black -z-1" />
        {/* Container */}
        <div className="relative max-w-[1000px] mx-auto pb-3 flex flex-col justify-center items-center w-[100%] h-[100%]">

          <div className=" glassmorphism-container justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="container justify-center  items-center">
              <p className=" text-2xl text-green-600 mt-10 ">Hii, my name is</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#edf2ff]">
                Ranjan Kumar
              </h1>
              <h2 className="text-2xl sm:text-2xl font-bold text-[#f5f8ff]">
                I’m a{" "}
                <TypeAnimation
                  
                  sequence={[
                    "Frontend Developer",
                    1000,
                    "MERN Developer",
                    1200,
                    "Full Stack Developer",
                    1000,
                    "C++ Programmer",
                    1000,
                  ]}
                // wrapper="p"
                // speed={50}
                repeat={Infinity}
                />
              </h2>
              <p className="text-white py-4 max-w-[700px]">
                I’m a Full-Stack developer and always try to build exceptional applications.
                {/* specializing in building exceptional digital experiences. */}
                Currently, I’m focused on building SaaS Full-stack web
                applications using Next.js and trying to combining with machine Learning.
              </p>
              <div className="flex flex-row gap-4">
                <Link to="projects" smooth={true} duration={500}>
                  <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
                    View Work
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3 " />
                    </span>
                  </button>
                </Link>
                <a href={Resume} download={Resume}>
                  <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-400 rounded-2xl">
                    Get Resume
                    <span className="">
                      <FaDownload className="ml-3 " />
                    </span>
                  </button>
                </a>
              </div>
            </div>

            {/* IMage Profile */}
            <div className="image py-4 mx-auto pr-8 justify-center items-center md:justify-center">
              {/* <div></div> */}
              <div className=" justify-center items-center z-200">
                <img
                  className="mx-auto h-75 w-75 "
                  src={PROFILE}
                  alt="profile-image.png"
                />


              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
