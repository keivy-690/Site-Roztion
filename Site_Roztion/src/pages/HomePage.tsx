import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Cases from '../components/Cases';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Cases />
      <Contact />
    </main>
  );
}