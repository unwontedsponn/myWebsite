import Section from '../reusableComponents/Section';
import SmallScreenSection from '../reusableComponents/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/LargeScreenSection';
import Image from 'next/image';
import TypewriterEffect from '../reusableComponents/TypewriterEffect';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';

const smallText = 'Drummer, pianist, composer';
const longText = (
  <p>
    Rooted in my love for jazz trios, I love to create music that blurs the lines between composed arrangements and spontaneous improvisation. I hope you enjoy my <span className="italic">jazzy musiings</span>.
  </p>
);

const imageAttributes = {
  id: "sponn-img",
  src: '/images/sponn.jpg',
  alt: "Sponn",
  width: 500,
  height: 500
}

export default function Sponn() {

  return (
      <Section id="sponn">

        <SmallScreenSection>

          <SlideFadeIn direction="right">
            <h1 className="text-center font-gopher-mono-semi opacity-40 color-blue text-8xl">sponn</h1>
          </SlideFadeIn>

          <SlideFadeIn className="max-w-xs border-3 border-thick-border-gray" direction="left"> 
            <Image {...imageAttributes} />
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
                <p>{smallText}</p>
              </SlideFadeIn>

              <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi leading-none text-12xl"><h1 className="opacity-40">sponn</h1></SlideFadeIn>

              <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl pl-32 tracking-largep whitespace-nowrap"><p className=""><TypewriterEffect text="some jazzy musings..." /></p></SlideFadeIn>

              <SlideFadeIn direction="up" className="pl-24 pt-4 color-dark font-gopher-mono tracking-smallphomepage text-xs max-w-2xl">{longText}</SlideFadeIn>
            </div>
                            
            {/* Right Column */}
            <SlideFadeIn className="max-w-md border-3 border-thick-border-gray" direction="right"> 
              <Image {...imageAttributes} />
            </SlideFadeIn>

          </LargeScreenSection>
        </Section>
  );
}