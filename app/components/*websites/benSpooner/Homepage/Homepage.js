import ResponsiveVisibility from '@/app/components/utilityComponents/ResponsiveVisibility';
import { smallText, longText, imageAttributes, words } from './HomepageContent';
import Image from 'next/image';
import Section from '../../../utilityComponents/Section';
import SmallScreenSection from '../../../utilityComponents/SmallScreenSection';
import LargeScreenSection from '../../../utilityComponents/LargeScreenSection';
import SlideFadeIn from '../../../utilityComponents/SlideFadeIn';
import RotatingWords from './RotatingWords';

export default function Homepage() {

  return (
    <Section id="homepage">

        <SmallScreenSection className="">

          <SlideFadeIn direction="left">
            <ResponsiveVisibility minHeight={760}>
              <h1 className={`text-center font-gopher-mono-semi opacity-40 color-blue text-6xl`}>Hello,</h1>
            </ResponsiveVisibility>
          </SlideFadeIn>

          <SlideFadeIn className={`max-w-xs border-3 border-thick-border-gray`} direction="right"> 
            <Image {...imageAttributes} />
          </SlideFadeIn>
          
          <SlideFadeIn direction="left">
            <ResponsiveVisibility minHeight={760}>
              <h1 className={`flex justify-center font-gopher-mono-semi opacity-40 color-blue text-7xl whitespace-nowrap`}>{`I'm Ben`}</h1>
            </ResponsiveVisibility>
          </SlideFadeIn>

        </SmallScreenSection>

        {/* ------------------------------------------------------------------------------------------ */}

        <LargeScreenSection>
          
          {/* Left Column */}
          <div id="title-div" className="flex flex-col">   
              <SlideFadeIn direction="down" className="text-sm pl-36 color-green font-gopher-mono-semi tracking-mediumphomepage"><p>{smallText}</p></SlideFadeIn>         

              <SlideFadeIn direction="left" className="font-gopher-mono-semi color-blue leading-none xl:text-10xl mb-0"><p className="opacity-40">Hello,</p></SlideFadeIn>

              <SlideFadeIn direction="right" className="text-4xl max-w-2xl color-dark-blue font-gopher-mono underline tracking-largep text-decoration-color md:pl-24"><p>and I like making... </p><RotatingWords words={words} /></SlideFadeIn>

              <SlideFadeIn direction="left" className="font-gopher-mono-semi color-blue leading-none text-11xl pb-0"><p className="opacity-40">I&apos;m Ben</p></SlideFadeIn>

              <SlideFadeIn direction="up" className="pl-28 color-dark font-gopher-mono tracking-smallphomepage text-xs max-w-2xl">{longText}</SlideFadeIn>
          </div>

          {/* Right Column */}
          <SlideFadeIn className="max-w-sm border-3 border-thick-border-gray" direction="right"> 
            <Image {...imageAttributes} />
          </SlideFadeIn>

        </LargeScreenSection>
    </Section>
  )
}