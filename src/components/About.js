import { Link } from 'react-scroll';
import './Skills.css'

const About = () => {
  return (
    <div name='about' className="Skills">
      <div className="heading">
        <div className="headings flex items-baseline">
          <h1
            className="px-5 text-2xl lg:px-10 lg:text-4xl font-semibold"
            id="achievementheading"
          >
            About Me
          </h1>
        </div>
      </div>


      <div name="about" className="aboutdiv w-full h-screen  bg-[#010206] text-gray-300">
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center items-center w-full h-full">

          <div className="text-center mx-auto sm:text-right text-3xl font-bold">
            <p>
              Namaste. I'm Ranjan Kumar
            </p>
            <p className="sm:text-right text-3xl">
              {" "}
              Please take a look around.</p>
            {/* <div className='md:hidden'>
              <Link to="contact" smooth={true} duration={500}>
                  <button className="text-white text-xl mt-8 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-2xl">
                    Hire Me
                  </button>
                </Link>
              </div> */}
          </div>
          <div className="mx-auto text-white">
            <p>
              I am passionate about building excellent application that improves
              the lives of those around me.
            </p>
            <p>
              {" "}
              Where accuracy meets creativity in competitive programming and web development or software developement is where I find my niche. My track record as a constant top performer in competitive programming speaks to my abilities for problem-solving and willingness to take on new challenges. As an enthusiast of web development, I've effectively applied my knowledge to practical situations, utilising my front-end expertise to produce seamless user experiences.

            </p>
            <p>
              {" "}
              My endless interest and adaptability in the learning environment are what make me unique. I take an open-minded approach to every project, keen to explore new areas and technology in order to keep up with the changing needs of the business world.
              I have a very flexible way of learning and I am open to learning new fields as per the requirements.</p>

          </div>

        </div>
      </div>
    </div>





  );
};

export default About;
