import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import AppointmentForm from '../components/AppointmentForm';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <AppointmentForm />
    </div>
  );
};

export default Home;