import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../Assets/R.png';
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaArrowRight,
    FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-scroll";

const Navbar = () => {
    const [navState, setnavState] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    const handleClick = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }
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
        <div className="card inset-x-0 top-0 z-50 fixed">
            <div
                className={`${!navState
                        ? "flex items-center text-white font-semibold justify-between px-4 py-4 lg:px-20 "
                        : "fixed md:fixed top-0 left-0  right-0 text-black font-semibold py-4 flex items-center justify-between px-4  lg:px-20 opacity-100 z-[200] blur-effect-theme"
                    }`}
            >
                {/* <div className="container pb-7">  */}
                {/* <Link to='contact' smooth={true} duration={500}><Button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>Hire Me</Button></Link> */}
                 {/* </div> */}

                <div className="flex lg:flex-1">
                    <a href="/" className="flex -m-1.5 p-1.5">
                        {/* <span className=" ml-1"><img src={logo} className="w-[3rem] h-[3rem]" alt="logo" /></span> */}
                        <h1 className={`${!navState ? 'text-white' : 'text-black'} font-semibold text-lg`}>iam_Ranjan</h1>
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className={`${!navState ? 'text-white' : 'text-black'} -m-2.5 inline-flex items-center justify-center rounded-md p-2.5`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className={`${!navState ? 'text-white' : 'text-black'} h-7 w-7`} aria-hidden="true" />
                    </button>
                </div>

                {/* menu */}
                <ul
                    className={`${!mobileMenuOpen  && 'lg:flex'? 'hidden lg:flex' : 'lg:flex lg:flex-row md:flex-row  text-white font-semibold px-3 justify-center'
                        }`}
                >
                    <li className="cursor-pointer hover:underline hover:text-blue-500 ">
                        <Link to='home' className="px-3" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-blue-500">
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-blue-500">
                        <Link to='experience' className="px-3" smooth={true} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-blue-500">
                        <Link to='skills'  smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-blue-500">
                        <Link to='projects' className="px-3" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-blue-500">
                        <Link to='services'  smooth={true} duration={500}>
                            Services
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-blue-500">
                        <Link to='achievement' className="px-3"  smooth={true} duration={500}>
                            Achievements
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-blue-500">
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:underline pl-3 hover:text-blue-500">
                        <a href='https://drive.google.com/file/d/1nnhm6euxklyDDm64jzS_XPuj5sqVgot-/view' target="_blank" rel="noreferrer" smooth={true} duration={500}>
                            My_Resume
                        </a>
                    </li>
                </ul>

                {/*<div className="container flex md:pr-5 justify-end">
                    <Link to='contact' smooth={true} duration={500}>
                      <button type="button" className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
                        Hire Me
                      </button>
                    </Link>
                </div> */}

                <div className={`${!navState ? 'text-white' : 'text-black'} hidden lg:flex lg:flex-1 lg:justify-end lg:text-xl`}>
                    <a href="https://github.com/ranjangupta4590" target="_blank" rel="noreferrer"><FaGithub className={`mr-4 text-xl ${!navState ? 'text-white' : 'text-black'}`} /></a>
                    <a href="https://www.linkedin.com/in/ranjan-kumar-2023s/" target="_blank" rel="noreferrer"><FaLinkedinIn className={`mr-4 text-xl ${!navState ? 'text-white' : 'text-black'}`} /></a>
                    <a href="https://www.instagram.com/ranjan_gupta_official/" target="_blank" rel="noreferrer"><FaInstagram className={`mr-4 text-xl ${!navState ? 'text-white' : 'text-black'}`} /></a>
                    <a href="mailto:ranjangupta35558@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className={`mr-4 text-xl ${!navState ? 'text-white' : 'text-black'}`} /></a>
                </div>




                {/* mobile view */}
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full  bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <h1 className="font-semibold text-lg">iam_Ranjan</h1>
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
                        <hr className=" mt-2 border-black" />

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-800">
                                <div className="space-y-2 py-6">

                                    <ul
                                        className={'-mx-3 block rounded-lg px-3 py-1 text-base font-semibold leading-7 text-black hover:bg-blue-500'}
                                    >
                                        <li className="p1 text-2xl">
                                            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                                                Home
                                            </Link>
                                        </li>

                                        <li className="py-1 text-2xl">
                                            {" "}
                                            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                                                About
                                            </Link>
                                        </li>

                                        <li className="py-1 text-2xl">
                                            {" "}
                                            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                                                Skills
                                            </Link>
                                        </li>

                                        <li className="py-1 text-2xl">
                                            {" "}
                                            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                                                Projects
                                            </Link>
                                        </li>

                                        <li className="py-1 text-2xl">
                                            {" "}
                                            <Link onClick={handleClick} to="achievement" smooth={true} duration={500}>
                                                Achievements
                                            </Link>
                                        </li>

                                        <li className="py-1 text-2xl">
                                            {" "}
                                            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>


                                    <a
                                        href="https://drive.google.com/file/d/1DP78vzXfZlM0gUGhs7eD8ERGjQhFWZTD/view?usp=sharing"
                                        className="text-xl font-semibold py-2 flex items-center"
                                    >
                                        My Resume
                                        <FaArrowRight className="ml-1 text-base arrow-icon" />
                                    </a>
                                </div>
                                <div className="py-2 text-white flex text-xl">
                                    <a href="https://github.com/ranjangupta4590" target="_blank" rel="noreferrer"><FaGithub className="mr-4 text-xl text-black" /></a>
                                    <a href="https://www.linkedin.com/in/ranjan-kumar-2023s/" target="_blank" rel="noreferrer"><FaLinkedinIn className="mr-4 text-xl text-black" /></a>
                                    <a href="https://www.instagram.com/ranjan_gupta_official/" target="_blank" rel="noreferrer"><FaInstagram className="mr-4 text-xl text-black" /></a>
                                    <a href="mailto:ranjangupta35558@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className="text-xl text-black" /></a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
















                {/* Social icons */}

                {/* <div className='fixed hidden lg:flex flex-col top-[35%] right-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ranjan-kumar-40117120a'
              target="_blank"
              rel='noreferrer'
            >
              <FaLinkedin size={30} />Linkedin
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/ranjangupta4590'
              target="_blank"
              rel='noreferrer'
            >
              <FaGithub size={30} />Github
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#6fc2b0]'>
            <Link
              className='flex justify-between items-center w-full text-gray-300'
              to='contact'
            >
              <HiOutlineMail size={30} />Email
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:mr-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1qxomjc3s6Gu5ZJmyaaCXLJfF3ts93TC9/view?usp=drive_link'
              target="_blank"
              rel='noreferrer'
            >
              <BsFillPersonLinesFill size={30} />Resume
            </a>
          </li>
        </ul>
      </div> */}
            </div>
            <hr className="w-full text-white" />
        </div>
    );
};

export default Navbar;
