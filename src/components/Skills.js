import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { Link } from "react-scroll";

import react_logo from "../assets/react.png";
import spring_logo from "../assets/spring.png";
import cypress_logo from "../assets/cypress.png";

const services = [
  {
    name: "Frontend Development",
    description:
      "I have extensive Frontend experience creating optimized and well-designed functional webapps. I have experience in a variety of languages and tools such as React.js, Vue.js, jQuery, and Javascript",
  },
  {
    name: "Test Automation Frameworks",
    description:
      "I believe that extensive testing is paramount when writing high-level production and enterprise code. I have been working with various testing frameworks and approaches such as End-to-End testing with Cypress as well as extensive unit testing with JUnit.",
  },
  {
    name: "Backend Development",
    description:
      "I have diversified experience maintaining and building Backend APIs where performance and reliability are of the highest priority. I have strong knowledge of Backend Frameworks such as Spring, Node.js, and Spring Boot.",
  },
  {
    name: "SQL Datebase Management and Querying",
    description:
      "To top off my Full-Stack knowledge, I have years of experience with a variety of unique databases and SQL styles. From developing personal at-home databases to working with propriety enterprise datasets, I have used a variety of tools such as Oracle, MySQL, and PostgreSQL.",
  },
];

const Services = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I am a Front-end Developer with over 4 years of experience.
            </h3>
            <Link to='projects' activeClass='active' smooth={true} spy={true}>
              <button className='btn btn-sm mb-10'>See my work</button>
            </Link>
            <div className='mx-auto py-10 flex flex-1 justify-start items-start'>
              <div className='tech-icon'>
                <img src={react_logo} />
              </div>
              <div className='tech-icon'>
                <img src={spring_logo} />
              </div>
              <div className='tech-icon'>
                <img src={cypress_logo} />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[700px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    {/* <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
