import Image from 'next/image';
import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/sectionsAndElements/LargeScreenSection';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';
import RotatingWords from '../reusableComponents/RotatingWords';

export default function Homepage() {
  const words = ["things", "websites", "games", "music", "films", "books", "sketches"];

  return (
    <Section id="homepage">

        {/**
          * Small Screens Layout
          */
          /*--------------------------------------------------------------------------------------------------------------------*/
        }
        <SmallScreenSection className="">

          <SlideFadeIn direction="left">
            <h1 className="text-center font-gopher-mono-semi opacity-40 color-blue text-6xl">Hello,</h1>
          </SlideFadeIn>

          <SlideFadeIn className="max-w-xs border-3 border-thick-border-gray" direction="right"> 
            <Image 
              src='/images/homepage-pic.jpeg'
              alt="homepage picture"
              width={500} // Needs to be 500 to preserve correct ratio
              height={500} // Needs to be 500 to preserve correct ratio
              priority
            />
          </SlideFadeIn>
          
          <SlideFadeIn direction="left">
            <h1 className="flex justify-center font-gopher-mono-semi opacity-40 color-blue text-7xl whitespace-nowrap">I&apos;m Ben</h1>
          </SlideFadeIn>

        </SmallScreenSection>

        {/* ------------------------------------------------------------------------------------------ */}

        <LargeScreenSection>
          
          {/* Left Column */}
          <div id="title-div" className="flex flex-col">   
              <SlideFadeIn direction="down" className="text-sm pl-36 color-green font-gopher-mono-semi tracking-mediumphomepage"><p>I like to get things done</p></SlideFadeIn>         

              <SlideFadeIn direction="left" className="font-gopher-mono-semi color-blue leading-none xl:text-10xl mb-0"><p className="opacity-40">Hello,</p></SlideFadeIn>

              <SlideFadeIn direction="right" className="text-4xl max-w-2xl color-dark-blue font-gopher-mono underline tracking-largep text-decoration-color md:pl-24"><p>and I like making... </p><RotatingWords words={words} /></SlideFadeIn>

              <SlideFadeIn direction="left" className="font-gopher-mono-semi color-blue leading-none text-11xl pb-0"><p className="opacity-40">I&apos;m Ben</p></SlideFadeIn>

              <SlideFadeIn direction="up" className="pl-28 color-dark font-gopher-mono tracking-smallphomepage text-xs max-w-2xl">I thrive on bringing ideas to life. From creating books and games to websites and musical pieces, I&apos;m fuelled by a passion for creative endeavours, and <span className="italic">getting things done</span></SlideFadeIn>
          </div>

          {/* Right Column */}
          <SlideFadeIn className="max-w-sm border-3 border-thick-border-gray" direction="right"> 
            <Image 
              src='/images/homepage-pic.jpeg'
              alt="homepage picture"
              width={500}
              height={500}
              priority
            />
          </SlideFadeIn>

        </LargeScreenSection>
    </Section>
  )
}