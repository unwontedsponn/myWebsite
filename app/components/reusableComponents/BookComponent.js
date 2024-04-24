"use client"
import Arrow from './sectionsAndElements/Arrow';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SlideFadeIn from './SlideFadeIn';
import Breadcrumb from './Breadcrumb';

export default function BookComponent({ width, height, direction, minWidth, maxWidth }) {

  const bookPages = [
    '/myBookPages/page1.png',
    '/myBookPages/page2.png',
    '/myBookPages/page3.png',
    '/myBookPages/page4.png',
    '/myBookPages/page5.png',
    '/myBookPages/page6.png',
    '/myBookPages/page7.png',
    '/myBookPages/page8.png',
    '/myBookPages/page9.png',
    '/myBookPages/page10.png',
    '/myBookPages/page11.png',
    '/myBookPages/page12.png',
    '/myBookPages/page13.png',
  ];
  
  const [currentPage, setCurrentPage] = useState(0); // Start with the first page
  const nextPage = () => setCurrentPage((prevPage) => (prevPage + 1) % bookPages.length);
  const prevPage = () => setCurrentPage((prevPage) => (prevPage - 1 + bookPages.length) % bookPages.length);

  // The useInView hook to monitor the component's visibility
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold according to your needs
    triggerOnce: false, // This ensures the hook triggers every time the component comes into view
  });

  // useEffect to reset currentPage when component comes into view
  useEffect(() => {
    if (inView) {
      setCurrentPage(0); // Reset to the first page
    }
  }, [inView]); // Dependency on inView

  return (
    <div ref={ref} className={`flex ${minWidth} ${maxWidth}`}>
      <Arrow direction="left" onClick={() => prevPage()} width={50} height={50} />
      
      <div className="flex flex-col w-full text-center xl:text-right px-2">
        <SlideFadeIn className={`border-3 border-thick-border-gray`} direction={direction}> 
          <Image 
            src={bookPages[currentPage]} 
            alt="My Book"
            width={width}
            height={height}
          />
        </SlideFadeIn>
        <Breadcrumb currentIndex={currentPage} itemCount={bookPages.length} onBreadcrumbClick={setCurrentPage}/>
      </div>
      
      <Arrow direction="right" onClick={() => nextPage()} width={50} height={50} />
    </div>
  );
}