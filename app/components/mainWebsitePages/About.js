import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/sectionsAndElements/LargeScreenSection';
import AboutMeText from '../reusableComponents/AboutMeText';
import Image from 'next/image';
import TypewriterEffect from '../reusableComponents/TypewriterEffect';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';

export default function About() {

  return (
      <Section id="about">

        <SmallScreenSection spaceY='space-y-2'>

          <SlideFadeIn direction="right">
            <h1 className="text-center font-gopher-mono-semi opacity-40 color-blue text-6xl">aboutMe</h1>
          </SlideFadeIn>
          

          <SlideFadeIn className="max-w-xs" direction="left"> 
            <Image 
              id="piano-img"
              src='/images/piano.png'
              alt="Piano"
              width={500}
              height={500}
              className="opacity-10"
            />
          </SlideFadeIn>

          <AboutMeText />

        </SmallScreenSection>

        {/* ------------------------------------------------------------------------------------------ */}

        <LargeScreenSection paddingX='px-32'>
          
          {/* Left Column */}
          <div className="flex flex-col w-2/3">       
              <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi leading-none text-11xl"><h1 className="opacity-40">aboutMe</h1></SlideFadeIn>

              <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl pl-32 tracking-largep whitespace-nowrap"><p className=""><TypewriterEffect text="A little bit about me..." /></p></SlideFadeIn>

              <AboutMeText />
            </div>
                            
            {/* Right Column */}
            <SlideFadeIn className="w-1/3" direction="right"> 
              <Image 
                src='/images/piano.png'
                alt="Piano"
                width={500}
                height={500}
                className="opacity-10"
              />
            </SlideFadeIn>

        </LargeScreenSection>

        </Section>
  );
}