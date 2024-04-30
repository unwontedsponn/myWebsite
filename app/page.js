"use client"

import { useState } from 'react';

import './globals.css';
import Header from "./components/mainWebsitePages/Header";
import Homepage from './components/mainWebsitePages/Homepage';
import Contact from './components/mainWebsitePages/Contact';
import Footer from './components/mainWebsitePages/Footer';
import About from './components/mainWebsitePages/AboutMe';
import Book from './components/mainWebsitePages/MyBook';
import Sponn from './components/mainWebsitePages/Sponn';
import PktTutor from './components/mainWebsitePages/PktTutor';
import Login from './components/mainWebsitePages/Login';

export default function Home() {
  const [visibleSection, setVisibleSection] = useState('default');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeSection = (section) => {
    if (section === 'pktTutor' && !isLoggedIn) setVisibleSection('login');
    else setVisibleSection(section);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setVisibleSection('pktTutor'); // Navigate to pktTutor after successful login
  };

  return (
    <main className="background-light flex justify-center">
      <div className="overflow-y-scroll overflow-x-hidden h-screen max-w-screen-2xl scroll-snap-y mandatory">
        <Header changeSection={changeSection} currentSection={visibleSection}/>
        {visibleSection === 'default' && (
          <>
            <Contact />
            <Footer />
            <Homepage />
            <About />
            <Book />
          </>
        )}
        {visibleSection === 'sponn' && (
          <>
            <Contact />
            <Footer />
            <Sponn />
          </>
        )}
        {visibleSection === 'pktTutor' && (
          <>
            <Contact />
            <Footer />
            <PktTutor />
          </>
        )}
        {visibleSection === 'login' && (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </main>
  );
}
