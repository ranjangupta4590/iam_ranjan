import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
//Stylesheet
import "./stylesheet.css";

import FooterImg from "./../Assets/profile.png";

const Footer = () => {
  return (
    <>
    
    <hr className="w-full flex  border-white shadow-inner inset-2 opacity-10 "></hr>
      <div name='footer' className=" card px-4 lg:px-20 py-4 flex justify-between flex-wrap">
        <div className="leftfooter flex items-center flex-wrap justify-center">
          <img src={FooterImg} alt="" />
          <h1 className="ml-2 font-semibold m-0 text-white">iam_Ranjan</h1>
          <h1 className="ml-2 pl-2 font-semibold text-white border-l-2 border-gray-200" id="removeborder">
            Copyright &#169; Gupta Developer
          </h1>
        </div>
        <div className="rightfooter flex items-center" id="minwidth">
          <a href="https://github.com/ranjangupta4590" target="_blank" rel="noreferrer"><FaGithub className="mr-4 text-xl text-white" /></a>
          <a href="https://www.linkedin.com/in/ranjan-kumar-2023s/" target="_blank" rel="noreferrer"><FaLinkedinIn className="mr-4 text-xl text-white" /></a>
          <a href="https://www.instagram.com/ranjan_gupta_official/" target="_blank" rel="noreferrer"><FaInstagram className="mr-4 text-xl text-white" /></a>
          <a href="mailto:ranjangupta35558@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className="text-xl text-white" /></a>
        </div>
      </div>
    </>
  );
}

export default Footer;
