import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { Link } from "react-scroll";

import Resume from "../assets/resume.pdf";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.25,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 text-center lg:text-left'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I am a Software Developer with over 4 years of experience.
            </h3>
            <p className='mb-6'>
              My background in computer and technology spans my entire life as I
              have always held a curiosity in how the devices that are used by
              all in everyday life work. I decided to further my passion into a
              career and went to Southern Illinois University where I graduated
              with honors. Post college I have worked within the Missouri
              Government assisting in the development of vital software.
            </p>
            <div className='flex justify-center lg:justify-normal gap-x-6 lg:gap-x-10 mb-12 mt-2'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={4} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={5} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Hours <br /> Developed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? (
                    <CountUp start={0} end={3.9} duration={4} decimals={1} />
                  ) : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  College <br /> GPA
                </div>
              </div>
            </div>
            <div className='flex max-w-max gap-x-8 items-center mx-auto lg:mx-0'>
              <a href={Resume} target='_blank' rel='noreferrer noopener'>
                <button className='btn btn-lg'>Hire Me</button>
              </a>

              <Link
                to='projects'
                activeClass='active'
                smooth={true}
                spy={true}
                className='text-gradient btn-link cursor-pointer'
              >
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
