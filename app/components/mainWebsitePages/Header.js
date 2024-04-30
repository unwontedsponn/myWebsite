"use client"
import Link from 'next/link';
import Arrow from '../reusableComponents/sectionsAndElements/Arrow';
import { useState, useEffect } from 'react';
import Contact from './Contact';

export default function Header({ changeSection }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // State to keep track of the current text option index
  const [textIndex, setTextIndex] = useState(0);
  
  // Array of text options
  const textOptions = [
    { text: 'benSpooner', sectionId: 'default', url: '/', navLinks: { link1: 'aboutMe', link2: 'myBook' } },
    { text: 'sponn', sectionId: 'sponn', url: '/sponn', navLinks: { link1: 'myAnimations', link2: 'myScores' } },
    { text: 'pktT', sectionId: 'pktTutor', url: '/pocket-tutor', navLinks: { link1: 'aboutMe', link2: 'myBook' } },
  ];

  useEffect(() => {
    const headerHeight = document.querySelector('#header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  }, []);

  const changeWebsite = (direction) => {
    // Compute the new index
    const newIndex = (textIndex + (direction === 'left' ? -1 : 1) + textOptions.length) % textOptions.length;
    setTextIndex(newIndex); // Update the text index
    // Use the new index to change the section
    changeSection(textOptions[newIndex].sectionId);
  };

  return (
    <>
      <section id="header" className="fixed top-0 left-0 right-0 z-10 pt-4 text-lg"> 
        
        <div className="flex justify-center items-center w-full mx-auto px-4 py-2">
  
          <div className="sm:w-full max-w-screen-xl mx-auto border-b-2 border-custom-border-color pb-4">
            <div className="flex justify-between items-center">
  
              <div className="flex flex-row border-r-2 border-custom-border-color pr-6 items-center">
                
                <div className="flex items-center">
                  <Arrow direction="left" onClick={() => changeWebsite("left")} width={20} height={20} />
                  <div className="flex flex-col w-full text-center xl:text-right px-2">
                    <a href={textOptions[textIndex].url} className="font-gopher-mono-semi" onClick={() => changeSection(textOptions[textIndex].sectionId)}>
                      {textOptions[textIndex].text}
                    </a>
                  </div>
                  <Arrow direction="right" onClick={() => changeWebsite("right")} width={20} height={20} />
                </div>
  
              </div>
  
              <div className="flex space-x-4 font-gopher-mono">
                <a 
                  id="link1Nav" 
                  href="#link1" 
                  className="hidden sm:block md:border-l-2 border-custom-border-color pl-6" 
                  onClick={() => changeSection(textOptions[textIndex].navLinks.link1)}
                >
                  {textOptions[textIndex].navLinks.link1}
                </a>
                <a 
                  id="link2Nav" 
                  href="#link2" 
                  className="hidden sm:block border-l-2 border-custom-border-color pl-6"
                  onClick={() => changeSection(textOptions[textIndex].navLinks.link2)}
                >
                  {textOptions[textIndex].navLinks.link2}
                </a>
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