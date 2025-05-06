import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";
import "./stylesheet.css";
import { Link } from "react-router-dom";

const navigation = [
  { name: "home", to: "/" },
  { name: "about", to: "about" },
  { name: "experience", to: "experience" },
  { name: "contact", to: "contact" },
  { name: "projects", to: "projects" },
  { name: "achievement", to: "projects" },
];

const Header = () => {
  const [navState, setnavState] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    // const section = document.querySelector(id);
    // if (section) {
    //   section.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //     inline: "nearest",
    //   });
    setMobileMenuOpen(false);
    // }
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setnavState(true);
    } else {
      setnavState(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div>
      <header className=" inset-x-0 top-0 z-50 fixed">
        <nav
          className={
            !navState
              ? "flex items-center justify-between px-4 py-4 lg:px-20 lg:py-5"
              : "fixed top-0 left-0  right-0 text-black pr-8 h-[30vh] flex items-center justify-between px-4 py-4 lg:px-20 lg:py-5 opacity-100 z-[200] blur-effect-theme"
          }
          // className="flex items-center justify-between px-4 py-4 lg:px-20 lg:py-5 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <h1 className="text-white font-semibold text-lg">iam_Ranjan</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {/* <ul>
            
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                // onClick={() => scrollToSection(item.href)}
                className="text-lg text-white font-base leading-6"
              >
                {item.name}
              </Link>
            ))}
            </ul> */}
            <ul className='text-white font-semibold flex flex-row gap-3'>
              <li>
                <Link to='home' smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='about' smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to='startup' smooth={true} duration={500}>
                  Startup
                </Link>
              </li>
              <li>
                <Link to='skills' smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to='work' smooth={true} duration={500}>
                  Work
                </Link>
              </li>
              <li>
                <Link to='contact' smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden text-white lg:flex lg:flex-1 lg:justify-end lg:text-xl">
            <a href="https://github.com/iam-piyush" target="_blank" ><FaGithub className="mr-4" /></a>
            <a href="https://www.linkedin.com/in/iam-piyush/" target="_blank"><FaLinkedinIn className="mr-4" /></a>
            <a href="https://www.instagram.com/myself._piyush/" target="_blank"><FaInstagram className="mr-4" /></a>
            <a href="mailto:code.piyush.kumar@gmail.com" target="_blank"><FaEnvelope /></a>
          </div>


        </nav>
        <hr className="w-full text-white" />
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <h1 className="font-semibold text-lg">iam_Piyush</h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="/resume"
                    className="lg:text-lg font-semibold py-2 flex items-center"
                  >
                    My Resume
                    <FaArrowRight className="ml-1 text-base arrow-icon" />
                  </a>
                </div>
                <div className="py-6 text-white flex text-xl">
                  <a href="https://github.com/iam-piyush" target="_blank"><FaGithub className="mr-4" /></a>
                  <a href="https://www.linkedin.com/in/iam-piyush/" target="_blank"><FaLinkedinIn className="mr-4" /></a>
                  <a href="https://www.instagram.com/myself._piyush/" target="_blank"><FaInstagram className="mr-4" /></a>
                  <a href="mailto:code.piyush.kumar@gmail.com" target="_blank"><FaEnvelope /></a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Header;
