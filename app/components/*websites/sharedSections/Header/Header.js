"use client"
import Arrow from '../../../utilityComponents/Arrow';
import { useState, useEffect } from 'react';
import Contact from '../Contact/Contact';

export default function Header({ setCurrentSection }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [textIndex, setTextIndex] = useState(0);

  const textOptions = [
    { text: 'benSpooner', sectionId: 'benSpooner', navLinks: { link1: 'aboutMe', link2: 'myBook' } },
    { text: 'sponn', sectionId: 'sponn', navLinks: { link1: 'myMusic', link2: 'myScores' } },
  ];

  useEffect(() => {
    const headerHeight = document.querySelector('#header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  }, []);

  const changeWebsite = (direction) => {
    const newIndex = (textIndex + (direction === 'left' ? -1 : 1) + textOptions.length) % textOptions.length;
    setTextIndex(newIndex);
    handleSectionChange(textOptions[newIndex].sectionId);
  };

  const handleSectionChange = (sectionId) => {
    console.log('Changing section to:', sectionId); // Debugging line
    setCurrentSection(sectionId);
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        console.log('Scrolling to section:', sectionId); // Debugging line
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log('Section not found:', sectionId); // Debugging line
      }
    }, 0);
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
                    <button
                      onClick={() => handleSectionChange(textOptions[textIndex].sectionId)}
                      className="font-gopher-mono-semi"
                      id="homepageNav"
                    >
                      {textOptions[textIndex].text}
                    </button>
                  </div>
                  <Arrow direction="right" onClick={() => changeWebsite("right")} width={20} height={20} />
                </div>
              </div>
              <div className="flex space-x-4 font-gopher-mono">
                {textOptions[textIndex].sectionId === 'benSpooner' && (
                  <>
                    <button
                      onClick={() => handleSectionChange('aboutMe')}
                      id="aboutNav"
                      className="hidden sm:block md:border-l-2 border-custom-border-color pl-6"
                    >
                      aboutMe
                    </button>
                    <button
                      onClick={() => handleSectionChange('myBook')}
                      id="bookNav"
                      className="hidden sm:block border-l-2 border-custom-border-color pl-6"
                    >
                      myBook
                    </button>
                  </>
                )}
                {textOptions[textIndex].sectionId === 'sponn' && (
                  <>
                    <button
                      onClick={() => handleSectionChange('myMusic')}
                      id="gameNav"
                      className="hidden sm:block md:border-l-2 border-custom-border-color pl-6"
                    >
                      myMusic
                    </button>
                    <button
                      onClick={() => handleSectionChange('myScores')}
                      id="tutorNav"
                      className="hidden sm:block border-l-2 border-custom-border-color pl-6"
                    >
                      myScores
                    </button>
                  </>
                )}
                <button
                  id="contactNav"
                  className="sm:border-l-2 border-custom-border-color pl-6"
                  onClick={toggleModal}
                >
                  contactMe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
