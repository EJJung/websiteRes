import React from 'react';

import Banner from './Banner';
import Roles from './Roles';
import Features from './Features';
import Projects from './Projects';
import Footer from '../utils/Footer';

const MainpageSum = () => {
  return (
    <div>
      <Banner />
      <Roles />
      <Features />
      <Projects />
    </div>
  )
}

export default MainpageSum;