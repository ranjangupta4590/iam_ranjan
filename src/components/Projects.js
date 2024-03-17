import React from "react";
import "./Skills.css";

import Restro from '../Assets/Projects/Restro_home.png'
import Service from '../Assets/Projects/Services.png'
import Hero from '../Assets/Projects/Hero.png'
import Contact from '../Assets/Projects/Contact.png'
import Menu from '../Assets/Projects/Menu.png'
// import College from '../Assets/Projects/College.png'

const Work = [

  {
    id: 0,
    name: "E-Commerce Website",
    videoLink: "https://youtu.be/QVdnxr0H1XQ",
    youtube_id: "QVdnxr0H1XQ",
    // videoLink: "https://youtu.be/5oPOb-qVK8o",
    // youtube_id: "5oPOb-qVK8o",
    github: "https://github.com/ranjangupta4590/commercial_shoes_website",
    link: "https://commercial-shoes-website.netlify.app/",
    description: "Responsive shoe website that allows users to easily browse and explore hundreds of shoe collections. A seamless shopping experience was also incorporated by incorporating a cart icon button for quick and easy product adding to shopping carts.Integrated Razorpay Payment gateway for easy and smooth payment.",
    tech_Stack: "React.js, Tailwind CSS, Razorpay Payment, Express.js, MongoDB, Node.js ",

  },
  
  {
    id: 3,
    name: "Data Visualiser App",
    videoLink: "https://youtu.be/AZcsBnzrwUM",
    youtube_id: "AZcsBnzrwUM",
    github: "https://github.com/ranjangupta4590/Data-Visualiser-App/tree/main",
    link: "https://data-visualiser-app.vercel.app/",
    description: "Data visualizer application by displaying and retrieving information from a JSON file. Utilized Chart.js to create visually appealing charts and graphs for easy data interpretation, it magnify user experience by presenting data of all six countries in an intuitive and visually stunning manner.",
    tech_Stack: "React.js, ChakraUI, Chart.js, Node.js, MongoDB, JSON Data",

  },

  {
    id: 2,
    name: "Data Analyser Dashboard",
    videoLink: "https://youtu.be/5CMf_r1lu1I",
    youtube_id: "5CMf_r1lu1I",
    github: "https://github.com/ranjangupta4590/Openin-frontend-Task",
    link: "https://ranjan-openin-task.vercel.app/",
    description: "A responsive Dashboard where JSON data of users, products and many more has been analysed. To login into account users can use direct login through Google.The admin can add user's credential and social accounts and data will stored in localstorage.",
    tech_Stack: "React.js, Tailwind CSS, Chart.js, Google Authentication",

  },

  {
    id: 4,
    name: "Task Management System",
    videoLink: "https://youtu.be/CoIX0GYO0KI",
    youtube_id: "CoIX0GYO0KI",
    github: "https://github.com/ranjangupta4590/Task-Management-System",
    link: "https://task-management-system-ten.vercel.app/tasklist",
    description: "A web app is used to handle your daily task and task will be stored in localstorage and user can edit, delete,can set priority and on completion can checked marked also.",
    tech_Stack: "React.js, Tailwind CSS, Local Storage",

  },
  {
    id: 5,
    name: "Pixel Kart",
    videoLink: "https://youtu.be/aXXyX-6BkeY",
    youtube_id: "aXXyX-6BkeY",
    github: "https://github.com/ranjangupta4590/PixelKart",
    link: "https://ranjan-pixel-kart.vercel.app/",
    description: "Pixel Kart is a Frontend development project where Unsplash API is fetched to download, upload photos for free.",
    tech_Stack: "React.js, Taiwind CSS",

  },
  {
    id: 6,
    name: "To Do List ",
    videoLink: "https://www.youtube.com/embed/imFAhYbFY5o?si=8XMRTR8NOHuCh51Q",
    youtube_id: "imFAhYbFY5o",
    github: "https://github.com/ranjangupta4590/TODO_LIST",
    link: "https://fullstack-to-do-list.netlify.app/",
    description: " A Full Stack Projectin which users according to their needs, users can add, change, and delete their assignments and it also cut down paperwork by 90%.",
    tech_Stack: "MongoDB, Express.js, Node.js, React.js",

  },
  {
    id: 1,
    name: "Messenger APP",
    videoLink: "https://youtu.be/kfP_EctuL6c",
    youtube_id: "kfP_EctuL6c",
    github: "https://github.com/ranjangupta4590/Messanger-APP",
    // link: "https://commercial-shoes-website.netlify.app/",
    description: "Full Stack Project Messenger APP, A Chat-App Project with real time messaging functionality.We have one on one chat as well as group chatting functionality in this app.",
    tech_Stack: "MongoDB, Express.js, Node.js, React.js, Socket.IO",

  },


  {
    id: 7,
    name: "Restaurant Webpage",
    image: Restro,
    github: "https://github.com/ranjangupta4590/Restro-sample-page",
    description: "A restaurant Webpage designed using HTML, CSS3, Bootstrap-4 and the page is completely responsive for all the screen size.",
    tech_Stack: "HTML, CSS3, Bootstrap-4",

  },
  {
    id: 8,
    name: "Restaurant Menu Design",
    image: Menu,
    github: "https://github.com/ranjangupta4590/Restro-sample-page",
    description: "Restaurant Menu Page is designed using Bootstap where row is divided into multiple columns using grid and page is completely responsive.",
    tech_Stack: "HTML, CSS3, Bootstrap-4",

  },
  {
    id: 9,
    name: "Fetched Unsplash API",
    image: Service,
    github: "https://github.com/ranjangupta4590/React-Webpage-Fetched-Unsplash-API-",
    description: "Fetch Unsplash API where photos get change in the cards whenever the page will be refreshed.  ",
    tech_Stack: "React.js, Taiwind CSS,",

  },
  {
    id: 10,
    name: "React JS Application",
    image: Hero,
    github: "https://github.com/ranjangupta4590/React-Webpage-Fetched-Unsplash-API-",
    description: "A beautiful and responsive to all screen size landing page using HTML, CSS, React.js, TailwindCSS",
    tech_Stack: "React.js, Taiwind CSS",

  },
  {
    id: 11,
    name: "Fetched Google-Map API",
    image: Contact,
    github: "https://github.com/ranjangupta4590/React-Webpage-Fetched-Unsplash-API-",
    description: "Fetch Google Map API to know the exact location of the user or service provider.",
    tech_Stack: "React.js, Taiwind CSS",

  },
  // {
  //   id: 12,
  //   name: "Bootstrap Application",
  //   image: College,
  //   github: "https://github.com/ranjangupta4590/College-Home-Page-Sample",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  //   tech_Stack: "Figma, UX/UI Design",

  // },

];



const Projects = () => {
  return (
    <div name='projects' className="Skills">
      <div className="heading">
        <div className="headings flex items-baseline">
          <h1
            className="px-5 text-2xl lg:px-20 lg:text-4xl font-semibold"
            id="projectsheading"
          >
            Projects
          </h1>
          <h4 className="text-lg px-4 text-white worked">Check out some of my works...</h4>
        </div>
      </div>

      <div className="skilldiv flex justify-center py-4 flex-wrap" id="projectsdiv">
        {Work.map((item, i) => (
          <div
            key={i}
            className="max-w-sm rounded-xl overflow-hidden card mt-3 mb-3 mx-auto"
          >
            <div className="imgcontainer">
              {item.videoLink && (
                <iframe
                  loading="lazy"
                  className="w-full"
                  src={`https://www.youtube.com/embed/${item.youtube_id}?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                  title={item.title}
                  allowFullScreen={true}
                  frameBorder="0"
                />
              )}
              {item.image && (
                <img
                  loading="lazy"
                  className="w-full"
                  src={item.image}
                  alt="img"
                />
              )}
            </div>
            <div className="px-6 py-1">
              <div className="font-bold text-xl rounded-full mx-5 bg-white">
                <p className="px-4 mx-auto py-1">
                  {item.name}
                </p>
                {/* dangerouslySetInnerHTML={{ __html: item.name }} */}

              </div>
              <div
                className="font-bold text-xl py-1 "
              >
                {/* <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a> */}
              </div>
              <p className="text-white text-base py-2">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center items-center flex-col">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">
                {item.tech_Stack}
              </span>
              {/* {(item.link || item.github) && (
                <div className=" inline-block text-xs font-semibold text-gray-50 mb-2">
                  <a href={item.github} target="_blank" rel="noreferrer" className=" rounded-full px-3 py-1">Github &#8599;</a>
                  <a href={item.link} target="_blank" rel="noreferrer" className=" rounded-full px-3 py-1">Website Link &#8599;</a>
                </div>
              )} */}


              {((item.github && item.link) || !item.link) && (
                <div className="inline-block text-xs font-semibold text-gray-50 mb-2">
                  <a href={item.github} target="_blank" rel="noreferrer" className="rounded-full px-3 py-1">Github &#8599;</a>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="rounded-full px-3 py-1">Website Link &#8599;</a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
