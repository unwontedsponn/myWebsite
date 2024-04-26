import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/sectionsAndElements/LargeScreenSection';
import Image from 'next/image';
import TypewriterEffect from '../reusableComponents/TypewriterEffect';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';

export default function Sponn() {

  return (
      <Section id="sponn">

        <SmallScreenSection>

          <SlideFadeIn direction="right">
            <h1 className="text-center font-gopher-mono-semi opacity-40 color-blue text-6xl">sponn</h1>
          </SlideFadeIn>
          

          <SlideFadeIn className="max-w-xs" direction="left"> 
            <Image 
              id="sponn-img"
              src='/images/sponn.jpg'
              alt="Sponn"
              width={500}
              height={500}
            />
          </SlideFadeIn>

          {/* <AboutMeText /> */}

        </SmallScreenSection>

        {/* ------------------------------------------------------------------------------------------ */}

        <LargeScreenSection paddingX='px-32'>
          
          {/* Left Column */}
          <div className="flex flex-col w-2/3">       
              <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi leading-none text-11xl"><h1 className="opacity-40">sponn</h1></SlideFadeIn>

              <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl pl-32 tracking-largep whitespace-nowrap"><p className=""><TypewriterEffect text="the one and only" /></p></SlideFadeIn>

              {/* <AboutMeText /> */}

            </div>
                            
            {/* Right Column */}
            <SlideFadeIn className="border-3 border-thick-border-gray" direction="right"> 
              <Image 
                id="sponn-img"
                src='/images/sponn.jpg'
                alt="Sponn"
                width={500}
                height={500}
              />
            </SlideFadeIn>

        </LargeScreenSection>

        </Section>
  );
}