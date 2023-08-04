import React from 'react';
import heroImage from '../assests/dialogue-hero.jpg'; 

export default function Hero() {
  return (
    <>
    <div className='mt-3'>
      <section className="bg-events flex items-center justify-left h-300 pb-12 mt-10 bg-[url('assets/dialogue-hero.jpg')] bg-no-repeat bg-cover bg-center bg-gray-500 bg-blend-multiply">
            <h1 id='hero'>
              Navigating and Routing
            </h1>
            <p id='home'>
              Showcasing navigation and routing, using the links in the Navbar to toggle through different pages!
            </p>
            <div id='heroimage'>
            <img  src={heroImage} alt="Hero Image" className="img-fluid cover" />
            </div>
      </section>
      </div>
    </>
  );
}
