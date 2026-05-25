import React from 'react';
import Home from './Home';
import Challenges from './Challenges';
import Services from './Services';
import About from './About';
import Training from './Training';
import TemplatesSection from '../components/TemplatesSection';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <Home />
      <Challenges />
      <Services />
      <About />
      <Training />
      <TemplatesSection />
      <Contact />
    </>
  );
};

export default HomePage;
