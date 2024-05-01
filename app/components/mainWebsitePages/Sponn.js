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
            <h1 className="text-center font-gopher-mono-semi opacity-40 color-blue text-8xl">sponn</h1>
          </SlideFadeIn>

          <SlideFadeIn className="max-w-xs border-3 border-thick-border-gray" direction="left"> 
            <Image 
              id="sponn-img"
              src='/images/sponn.jpg'
              alt="Sponn"
              width={500}
              height={500}
            />
          </SlideFadeIn>

          <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-2xl tracking-largep whitespace-nowrap">
            <p className=""><TypewriterEffect text="my jazzy musings" /></p>
          </SlideFadeIn>

        </SmallScreenSection>

        {/* ------------------------------------------------------------------------------------------ */}

        <LargeScreenSection>

          {/* Left Column */}
          <div className="flex flex-col">
              <SlideFadeIn direction="down" className="text-sm pl-36 color-green font-gopher-mono-semi tracking-mediumphomepage">
                <p>Pianist, drummer, explorer</p>
              </SlideFadeIn>

              <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi leading-none text-12xl"><h1 className="opacity-40">sponn</h1></SlideFadeIn>

              <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl pl-32 tracking-largep whitespace-nowrap"><p className=""><TypewriterEffect text="my jazzy musings" /></p></SlideFadeIn>

              <SlideFadeIn direction="up" className="pl-28 color-dark font-gopher-mono tracking-smallphomepage text-xs max-w-2xl">
                <p>Dedicated to exploring the depths of sound. My journey through music has been about blending genres and styles, creating something truly unique. Stay tuned for the next wave of sonic adventures with <span className="italic">sponn</span>.
                </p>
              </SlideFadeIn>

            </div>
                            
            {/* Right Column */}
            <SlideFadeIn className="max-w-md border-3 border-thick-border-gray" direction="right"> 
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