import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Topics from '../components/Topics';
import Security from '../components/Security';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div>
      { <Header /> }
      { <Hero /> }
      { <Features /> }
      { <Topics /> }
      { <Security /> }
      { <About /> }
      { <CTA /> }
      { <Footer /> }
      { <Chatbot /> }
    </div>
  );
};

export default Home;