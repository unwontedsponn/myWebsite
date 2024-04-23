"use client"
import Arrow from './sectionsAndElements/Arrow';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SlideFadeIn from './SlideFadeIn';
import Breadcrumb from './Breadcrumb';

export default function BookComponent({ width, height, direction, minWidth, maxWidth }) {

  const bookPages = [
    '/myBookPages/page1.jpg',
    // '/myBookPages/page8.jpg',
    // '/myBookPages/page9.jpg',
    // '/myBookPages/page10.jpg',
    // '/myBookPages/page11.jpg',
    // '/myBookPages/page12.jpg',
    // '/myBookPages/page13.jpg',
    '/myBookPages/page14.jpg',
    '/myBookPages/page15.jpg',
    '/myBookPages/page16.jpg',
    '/myBookPages/page17.jpg',
    '/myBookPages/page18.jpg',
    '/myBookPages/page19.jpg',
    '/myBookPages/page20.jpg',
    '/myBookPages/page21.jpg',
    '/myBookPages/page22.jpg',
    '/myBookPages/page23.jpg',
    '/myBookPages/page24.jpg',
    '/myBookPages/page25.jpg',
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