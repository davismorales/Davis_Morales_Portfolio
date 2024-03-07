import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import PortfolioPreview from "../assets/portfolio.PNG";
import NbaReferencePreview from "../assets/nba-reference.PNG";

const Projects = () => {
  return (
    <section className='section' id='projects'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Projects
              </h2>
              <h3 className='h3 max-w-sm mb-12'>
                In my free time, I enjoy diversifying my knowledge and learn new
                skills. I often package this new knowledge into projects. Check
                out these previews of my recent work and head over to my Github
                to see more.
              </h3>
              <a
                href='https://github.com/davismorales?tab=repositories'
                target='_blank'
                rel='noreferrer noopener'
              >
                <button className='btn btn-sm'>
                  View all projects <i class='fa-brands fa-github fa-lg'></i>
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70  w-full h-full absolute z-40 transition-all duration-300'></div>
              <img
                className='group-hover:scale-125 transition-all duration-500'
                src={PortfolioPreview}
                alt=''
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  Modern Animations to have a sleek portfolio
                </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Portfolio Website</span>
              </div>
            </div>
            <a
              href='https://nba-reference-6qtd.onrender.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div className='group-hover:bg-black/70  w-full h-full absolute z-40 transition-all duration-300'></div>
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={NbaReferencePreview}
                  alt=''
                />
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    Utilizing APIs to Display Unique Data in React
                  </span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>NBA Reference</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
