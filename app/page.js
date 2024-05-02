"use client"
import { useState } from 'react';
import './globals.css';
import Header from "./components/*websites/sharedComponents/Header/Header";
import Sections from './components/Sections';
import Footer from './components/*websites/sharedComponents/Footer/Footer';

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
