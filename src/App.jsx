import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
    </Layout>
  );
}

export default App;
