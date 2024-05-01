"use client"
import { useState } from 'react';
import './globals.css';
import Header from "./components/mainWebsitePages/Header";
import Footer from './components/mainWebsitePages/Footer';
import Sections from './components/mainWebsitePages/Sections';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('benSpooner');

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
