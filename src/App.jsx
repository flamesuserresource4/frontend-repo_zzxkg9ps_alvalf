import React from 'react';
import Hero from './components/Hero';
import CardDeck from './components/CardDeck';
import HowToPlay from './components/HowToPlay';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <CardDeck />
      <HowToPlay />
      <Footer />
    </div>
  );
}
