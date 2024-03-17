import React from "react";

import "./Skills.css";

//Certificates
import algo from '../Assets/Certificates/Coursera_Algo-1.png';
import react from '../Assets/Certificates/Coursera_React-1.png';
import bootstrap from '../Assets/Certificates/Coursera_Bootstrap-1.png';
import jp from '../Assets/Certificates/JPMC.png';
import gcp from '../Assets/Certificates/gcp-2021-1.png';
import solitaire from '../Assets/Certificates/solitaire.png';
import cord from '../Assets/Certificates/co-ordinating.png';
import khitij from '../Assets/Certificates/khitij-1.png';




export const Certificate = [
  {
    id: 1,
    name: "Algorithmic ToolBox",
    image: algo,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "UCSan Diego Coursera Certificate",
    date: "<span>24<sup>th</sup> January, 2022</span>",
    Link: "https://www.coursera.org/account/accomplishments/verify/2SP468R6EUX9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",

  },
  {
    id: 2,
    name: "Web UI Frameworks and Tools",
    image: bootstrap,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "Coursera Certificate",
    date: "<span>16<sup>th</sup> December, 2021</span>",
    Link: "https://www.coursera.org/account/accomplishments/verify/THGGUSS4LKQN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",

  },
  {
    id: 3,
    name: "Front-End Web Development with React",
    image: react,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "Coursera Certificate",
    date: "<span>10<sup>th</sup> May, 2022</span>",
    Link: "https://www.coursera.org/account/accomplishments/verify/BTAQASVHDYK2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",

  },
  {
    id: 4,
    name: "Software Engineering Job Simulation",
    image: jp,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "JPMorgan Chase & Co. Forage Certification",
    date: "<span>9<sup>th</sup> September, 2023</span>",
    Link: "https://drive.google.com/file/d/1d9DxBlxTFxi1_fIF5CY4KrFpeFTHQ0w8/view",

  },
  {
    id: 5,
    name: "Google Cloud Program",
    image: gcp,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "Chandigarh Engineering College, Landran(Mohali)",
    date: "<span>15<sup>th</sup> April, 2021</span>",
    Link: "https://drive.google.com/file/d/1QQ3ylG1mYNlDhxd-aXihrDGJ93yisjMu/view?usp=sharing",

  },
  {
    id: 6,
    name: "React.Js Training",
    image: solitaire,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "Solitaire Infosys Pvt. Ltd.(Mohali)",
    date: "<span>17<sup>th</sup> August, 2022</span>",
    Link: "https://drive.google.com/file/d/1XnUQRm0LGpDw2sH-9Sd7qZ6uwNbIJ0v2/view?usp=drive_link",

  },
  {
    id: 7,
    name: "Co-ordinating as Vice President",
    image: cord,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "Chandigarh Engineering College, Landran(Mohali)",
    date: "<span>30<sup>th</sup> November, 2022</span>",
    Link: "https://drive.google.com/file/d/1_0v1wOtrd9kWkmvNB17DEtDpvp864oTb/view?usp=drive_link",

  },
  {
    id: 8,
    name: "IIT KGP Kshitij",
    image: khitij,
    alt: "Certificate",
    heading: "<span>1<sup>st</sup> Position in WebDev Summit</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    college: "Chandigarh Engineering College, Landran(Mohali)",
    date: "<span>14<sup>th</sup> January, 2021</span>",
    Link: "https://drive.google.com/file/d/1Zik6Qw_0sNera9zEmDegoz0Sh9TuTdWn/view?usp=drive_link",

  },

]


const Achievements = () => {
  return (
    <div name='achievement' className="Skills">
      <div className="heading">
        <div className="headings flex items-baseline">
          <h1
            className="px-5 text-2xl lg:px-10 lg:text-4xl font-semibold"
            id="achievementheading"
          >
            Achievements
          </h1>
        </div>
      </div>

      <div
        className="skilldiv flex justify-center py-4 flex-wrap"
        id="achievementsdiv"
      >
        {Certificate.map((item, i) => (
          <div
            key={i}
            className="max-w-sm card rounded-xl overflow-hidden  mt-5 mb-5 mx-auto"
          >
            <div className="imgcontainer">
              <img
                className="w-full"
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </div>
            <div className="px-6 py-1">
            <div className="font-bold text-xl rounded-full mx-5 bg-white">
                <p className="px-4 py-2">
                {item.name}
                </p>
                {/* dangerouslySetInnerHTML={{ __html: item.name }} */}

              </div>
              {/* <p className="text-white text-base">{item.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center items-center flex-col">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mb-2">
                {item.college}
              </span>
              <div className="inline-block text-xs font-semibold text-gray-500 mb-2" dangerouslySetInnerHTML={{ __html: item.date }} />
                <div className=" inline-block text-center text-xs font-semibold text-gray-50 mb-2">
                  <a href={item.Link} target="_blank" rel="noreferrer" className=" rounded-full px-3 py-1">Visit Link &#8599;</a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;