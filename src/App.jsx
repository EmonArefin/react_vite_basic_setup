import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import Service from './components/Service';

import '../src/assets/css/styles.css'; // Import the CSS file

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Footer/>
    </div>
  );
};

export default App;
