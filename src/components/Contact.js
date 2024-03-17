import React from "react";
import pic from '../Assets/1.svg';
// import telegram from '../Assets/telegram-2.mp4';
// import {Lottie} from 'react-lottie';
// import mail from '../Assets/email.json';

import "./Skills.css";


const Contact = () => {

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   mail: mail,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };


  return (
  <>
    <div name='contact' className="Skills">
      <div className="heading">
        <div className="headings flex items-baseline">
          <h1
            className="px-5 text-2xl lg:px-20 lg:text-4xl font-semibold"
            id="achievementheading"
          >
            Contact
          </h1>
          {/* <hr className="w-full  flex  border-y-20 border-orange-500/100 opacity-10 "></hr> */}
        </div>
      </div>

      <div className="aboutdiv pt-10 pl-10 flex justify-center items-center mx-auto gap-10">

        <div className=' mx-auto  pr-5 pb-5 flex flex-col justify-center items-center w-full h-full'>
          <form method='POST' action="https://formspree.io/f/xoqblope" className='flex flex-col w-full pt-4 '>


            {/* <span className='text-2xl text-white'>Name:   </span> */}
            <input className='bg-[#e6e7e8] py-2 text-black rounded-md ' type="text" placeholder='Name' name='name' required />
            <input className=' bg-[#e6e7e8] py-2 my-5 text-black rounded-md' type="text" placeholder='Mobile No.' name='mobile' required />
            <input className=' py-2 bg-[#e6e7e8] text-black rounded-md' type="email" placeholder='Email' name='email' required />
            <textarea className='my-5 bg-[#e6e7e8] py-2 text-black rounded-md' name="message" rows="10" placeholder='Message' minLength={5}></textarea>
            <button className='text-white card border-2 py-4 hover:bg-green-600 hover:border-green-600 px-5 mx-auto flex items-center rounded-md' type='submit'>Send</button>
          </form>
        </div>

        <div className='hidden md:flex items-center  justify-center mx-auto'>
          <img src={pic} alt="svg_pic" />

        </div>
      </div>
      
    </div>
      </>
  )
}

export default Contact;