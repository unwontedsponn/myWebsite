"use client"
import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/sectionsAndElements/LargeScreenSection';
import BookComponent from '../reusableComponents/BookComponent';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';
import BuyNowLinks from '../reusableComponents/BuyNowLinks';

export default function Book() {

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
              <p>
                {`Beginner To Composer In 14 Days is delightfully different. Moving swiftly from theory to action, Ben emerges as the teacher you always wished you'd had, championing radical creative freedom, improvisation and composition - even for beginners. Especially for beginners in fact. "Students need freedom to truly fall in love with their instrument" he writes, "frameworks that pique their curiosity over and over again so that practice becomes play". Whether you're a complete beginner or have a little knowledge up your sleeve, you'll adore this dynamic and intimate guide to learning the piano, peppered with evocative vignettes of a life lived with music at its heart. Best of all, you'll come away with a method you can use time and time again to create your very own music, captured on professional quality lead sheets you can share with other musicians, to bring your work to life. Suitable for adults and a useful resource for teachers. Complements graded and traditional approaches to learning.`}
              </p>
            </SlideFadeIn>

            <BuyNowLinks />
          </div>
                          
          {/* Right Column */}
          <BookComponent width={3000} height={3000} direction="right" minWidth='min-w-7xl'/>
        </LargeScreenSection>
  </Section>
  );
}

{/* FREE DOWNLOAD */}
{/* <div className="flex items-end">
  <p id="book-sample" className="bold font-gopher-mono mt-2 text-xl">
    <a href="./images/sample and worksheet.pdf" target="_blank" rel="noopener noreferrer"><span className="color-dark-blue">View Sample + Free Worksheet DOWNLOAD↓</span></a>
  </p>
</div> */}