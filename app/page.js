"use client"
import { useState } from 'react';
import Header from "./components/*websites/sharedSections/Header/Header";
import Sections from './Sections';
import Footer from './components/*websites/sharedSections/Footer/Footer';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('benSpooner');

  console.log(currentSection);

  return (
    <main className="background-light flex justify-center">
      <div className="overflow-y-scroll overflow-x-hidden h-screen max-w-screen-2xl scroll-snap-y mandatory">
        <Header setCurrentSection={setCurrentSection} />
        <Sections currentSection={currentSection} />
        <Footer />
      </div>
    </main>
  );
}
