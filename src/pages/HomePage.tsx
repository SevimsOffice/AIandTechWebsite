import React from 'react';
import Home from './Home';
import Challenges from './Challenges';
import Services from './Services';
import About from './About';
import Training from './Training';
import TemplatesSection from '../components/TemplatesSection';
import PromptsSection from '../components/PromptsSection';
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
      <PromptsSection />
      <Contact />
    </>
  );
};

export default HomePage;
