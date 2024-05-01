"use client"
import Link from 'next/link';
import Arrow from '../reusableComponents/Arrow';
import { useState, useEffect } from 'react';
import Contact from './Contact';

export default function Header({ setCurrentSection }) {
  
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [textIndex, setTextIndex] = useState(0);

  const textOptions = [
    { text: 'benSpooner', sectionId: 'benSpooner', navLinks: { link1: 'aboutMe', link2: 'myBook' } },
    { text: 'sponn', sectionId: 'sponn', navLinks: { link1: 'myAnimations', link2: 'myScores' } },
    // { text: 'pktT', sectionId: 'pktTutor', url: '/pocket-tutor', navLinks: { link1: 'link1', link2: 'link2' } },
  ];

  // Effect to adjust the CSS variable based on the header's height upon component mount/update
  useEffect(() => {
    const headerHeight = document.querySelector('#header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  }, []);

  // Function to change the core website based on arrow direction
  const changeWebsite = (direction) => {
    const newIndex = (textIndex + (direction === 'left' ? -1 : 1) + textOptions.length) % textOptions.length;
    setTextIndex(newIndex);
    handleSectionChange(textOptions[newIndex].sectionId);
  };

  // Function to update the current section and potentially scroll to it
  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section id="header" className="fixed top-0 left-0 right-0 z-10 pt-4 text-lg">
        <div className="flex justify-center items-center w-full mx-auto px-4 py-2">
          <div className="sm:w-full max-w-screen-xl mx-auto border-b-2 border-custom-border-color pb-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-row border-r-2 border-custom-border-color pr-6 items-center">
                <div className="flex items-center font-gopher-mono-semi">
                  <Arrow direction="left" onClick={() => changeWebsite("left")} width={20} height={20} />
                  <div className="flex flex-col w-full text-center xl:text-right px-2">
                    {/* Link component used for navigation; prevents default link behavior to manage via state */}
                    <Link href="#" onClick={(e) => {
                      e.preventDefault();
                      handleSectionChange(textOptions[textIndex].sectionId);
                    }}>{textOptions[textIndex].text}</Link>
                  </div>
                  <Arrow direction="right" onClick={() => changeWebsite("right")} width={20} height={20} />
                </div>
              </div>
              <div className="flex space-x-4 font-gopher-mono">
                {/* Individual navigation links are also using Link with event prevention */}
                <Link href="#" onClick={(e) => {
                  e.preventDefault();
                  handleSectionChange(textOptions[textIndex].navLinks.link1);
                }} className="hidden sm:block md:border-l-2 border-custom-border-color pl-6">
                  {textOptions[textIndex].navLinks.link1}
                </Link>
                <Link href="#" onClick={(e) => {
                  e.preventDefault();
                  handleSectionChange(textOptions[textIndex].navLinks.link2);
                }} className="hidden sm:block border-l-2 border-custom-border-color pl-6">
                  {textOptions[textIndex].navLinks.link2}
                </Link>
                <button id="contactNav" className="sm:border-l-2 border-custom-border-color pl-6" onClick={toggleModal}>contactMe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
