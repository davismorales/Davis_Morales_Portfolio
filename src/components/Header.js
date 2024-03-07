import React from "react";

import Logo from "../assets/logo.png";

import Resume from "../assets/resume.pdf";

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <img src={Logo} alt='' />
          <a href={Resume} target='_blank' rel='noreferrer noopener'>
            <button className='btn btn-sm'>Resume</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
