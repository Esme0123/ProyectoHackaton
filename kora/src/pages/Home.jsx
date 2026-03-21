import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
// import Topics from '../components/Topics';
// import Security from '../components/Security';
// import About from '../components/About';
// import CTA from '../components/CTA';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      { <Header /> }
      { <Hero /> }
      { <Features /> }
      {/* <Topics /> */}
      {/* <Security /> */}
      {/* <About /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
      <div style={{ height: '200px', backgroundColor: 'var(--color-white)', textAlign: 'center', paddingTop: '50px' }}>
        <h2 style={{ fontFamily: 'var(--font-title)', color: 'var(--color-primary)' }}>Próximo paso: ¿Por qué Kora?</h2>
      </div>
    </div>
  );
};

export default Home;