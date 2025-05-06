// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";


function App() {
  return (
    <>
    <div className="bg-[#010206]">
      <Navbar />
      <div className="px-4 lg:p-20 md:py-0 bg-[#010206]">
          <Home/>
        <div className="mt-14">
          <div>
            <About />
          </div>
        </div>
        
        <div className="mt-14">
          <div>
            <Experience />
          </div>
        </div>
        <div className="mt-14">
          <div>
            <Skills />
          </div>
        </div>

        <div className="mt-14">
          <div>
            <Projects />
          </div>
        </div>
        
        <div className="mt-14">
          <div>
            <Services />
          </div>
        </div>
        <div className="mt-14">
          <div>
            <Achievements />
          </div>
        </div>

        
        <div className="mt-14">
          <div>
            <Contact />
          </div>
        </div>

        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div> */}
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
