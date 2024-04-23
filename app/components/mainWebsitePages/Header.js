"use client"
import Arrow from '../reusableComponents/sectionsAndElements/Arrow';
import { useState, useEffect } from 'react';
import Contact from './Contact';
import Breadcrumb from '../reusableComponents/Breadcrumb';

export default function Header({ changeSection }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // State to keep track of the current text option index
  const [textIndex, setTextIndex] = useState(0);
  // Array of text options
  const textOptions = [
    { text: 'benSpooner', sectionId: 'default', url: '#homepage' },
    { text: 'pktT', sectionId: 'pktTutor', url: '#pocket-tutor' },
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

              <div className="flex flex-row border-r-2 border-custom-border-color pr-6">
                <div className="flex">

                {/* Just benSpooner */}
                <a href={textOptions[textIndex].url} className="font-gopher-mono-semi" onClick={() => changeSection(textOptions[textIndex].sectionId)}>
                    {textOptions[textIndex].text}
                </a>
                  
                  {/* benSpooner with pktT */}
                  {/* <Arrow direction="left" onClick={() => changeWebsite("left")} width={20} height={20} /> */}
                  {/* <div className="flex flex-col w-full text-center xl:text-right px-2"> */}
                    {/* benSpooner or pktT */}
                      {/* <a href={textOptions[textIndex].url} className="font-gopher-mono-semi" onClick={() => changeSection(textOptions[textIndex].sectionId)}> */}
                        {/* {textOptions[textIndex].text} */}
                      {/* </a> */}
                      {/* <Breadcrumb currentIndex={textIndex} itemCount={textOptions.length} onBreadcrumbClick={setTextIndex}/> */}
                  {/* </div> */}
                  {/* <Arrow direction="right" onClick={() => changeWebsite("right")} width={20} height={20} /> */}

                </div>
              </div>

              <div className="flex space-x-4 font-gopher-mono">
                <a 
                  id="aboutNav" 
                  href="#about" 
                  className="hidden sm:block md:border-l-2 border-custom-border-color pl-6" 
                  >
                    aboutMe
                </a>
                <a id="bookNav" href="#book" className="hidden sm:block border-l-2 border-custom-border-color pl-6">myBook</a>
                <a id="gameNav" href="#game" className="hidden sm:block border-l-2 border-custom-border-color pl-6">myGame</a>
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