import { useState } from 'react';
import Section from '../../../utilityComponents/Section';
import SmallScreenSection from '../../../utilityComponents/SmallScreenSection';
import LargeScreenSection from '../../../utilityComponents/LargeScreenSection';
import SlideFadeIn from '../../../utilityComponents/SlideFadeIn';
import YouTubeVideo from '../../../utilityComponents/YouTubeVideo'; // Import the YouTubeVideo component
import Breadcrumb from '../../../utilityComponents/Breadcrumb';
import TypewriterEffect from '../../../utilityComponents/TypewriterEffect';

export default function MyAnimations() {
  const videos = [
    { id: 'DRqjaJgaO_E', title: 'So It Goes' },
    { id: '1zlcipBv_ME', title: 'This Now This' },
    { id: 'XenuFH6qTdM', title: 'When We Fell' }
  ];
  
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  // Update the current video when a breadcrumb is clicked
  const handleBreadcrumbClick = index => {
    setCurrentVideo(videos[index]);
  };

  return (
    <Section id="myAnimations">
      <SmallScreenSection>

        <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi text-6xl">
          <h1 className="opacity-40">myAnimations</h1>
        </SlideFadeIn>

        {/* Typewriter effect to dynamically display the title of the current video */}
        <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-xl tracking-largep whitespace-nowrap">
          <p>
            <TypewriterEffect text={currentVideo.title} />
          </p>
        </SlideFadeIn>

        <SlideFadeIn>
          <YouTubeVideo id={currentVideo.id} height='195' width='320'/>
        </SlideFadeIn>
        
        <SlideFadeIn direction="left">
          <Breadcrumb 
            currentIndex={videos.indexOf(currentVideo)} 
            itemCount={videos.length} 
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </SlideFadeIn>

      </SmallScreenSection>

      {/* ------------------------------------------------------------------------------------------ */}

      <LargeScreenSection flexDirection="flex-col" className="space-y-4">

        <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi text-9xl">
          <h1 className="opacity-40">myAnimations</h1>
        </SlideFadeIn>

        {/* Typewriter effect to dynamically display the title of the current video */}
        <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl tracking-largep whitespace-nowrap">
          <p>
            <TypewriterEffect text={currentVideo.title} />
          </p>
        </SlideFadeIn>

        <SlideFadeIn>
          <YouTubeVideo id={currentVideo.id} />
        </SlideFadeIn>
        
        <SlideFadeIn direction="left">
          <Breadcrumb 
            currentIndex={videos.indexOf(currentVideo)} 
            itemCount={videos.length} 
            onBreadcrumbClick={handleBreadcrumbClick}
          />
        </SlideFadeIn>

      </LargeScreenSection>
    </Section>
  );
}
