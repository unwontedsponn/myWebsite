"use client"
import { bookBlurbText } from './MyBookContent';
import Section from '../../reusableComponents/Section';
import SmallScreenSection from '../../reusableComponents/SmallScreenSection';
import LargeScreenSection from '../../reusableComponents/LargeScreenSection';
import BookComponent from './BookComponent';
import SlideFadeIn from '../../reusableComponents/SlideFadeIn';
import BuyNowLinks from '../../reusableComponents/BuyNowLinks';

export default function MyBook() {

  return (
      <Section id="myBook">

        <SmallScreenSection spaceY="space-y-6">

          {/* <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi text-7xl"><h1  className="opacity-40">myBook</h1></SlideFadeIn> */}

          <BookComponent width={500} height={500} direction="right" maxWidth='max-w-sm'/>

          <BuyNowLinks itemsCenter='items-center'/>

        </SmallScreenSection>
  
        {/* ------------------------------------------------------------------------------------------ */}
        
        <LargeScreenSection id="book" paddingX='px-32'>     
          {/* Left Column */}
          <div className="flex flex-col">       
            <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi leading-none text-11xl"><h1 className="opacity-40">myBook</h1></SlideFadeIn>

            <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl pl-32 tracking-largep whitespace-nowrap"><p className="">Beginner To Composer...</p></SlideFadeIn>

            <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color tracking-largep text-2xl pl-32"><p>in 14 days</p></SlideFadeIn>

            <SlideFadeIn direction="left" className="text-xs color-dark font-gopher-mono pt-4">
              {bookBlurbText}
            </SlideFadeIn>

            <BuyNowLinks />
          </div>
                          
          {/* Right Column */}
          <BookComponent width={3000} height={3000} direction="right" minWidth='min-w-7xl'/>
        </LargeScreenSection>
  </Section>
  );
}