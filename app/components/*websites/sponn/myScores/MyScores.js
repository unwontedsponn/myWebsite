import Section from '../../../utilityComponents/Section';
import SmallScreenSection from '../../../utilityComponents/SmallScreenSection';
import LargeScreenSection from '../../../utilityComponents/LargeScreenSection';
import SlideFadeIn from '../../../utilityComponents/SlideFadeIn';
import TypewriterEffect from '../../../utilityComponents/TypewriterEffect';
import Breadcrumb from '../../../utilityComponents/Breadcrumb';

export default function MyScores() {

  return (
    <Section id="myScores">

        <SmallScreenSection className="">

          <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi text-6xl">
            <h1 className="opacity-40">myScores</h1>
          </SlideFadeIn>

          {/* Typewriter effect to dynamically display the title of the current video */}
          <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-xl tracking-largep whitespace-nowrap">
            <p>
              <TypewriterEffect text='coming soon' />
            </p>
          </SlideFadeIn>
          
          <SlideFadeIn direction="left">
            
          </SlideFadeIn>

        </SmallScreenSection>

        {/* ------------------------------------------------------------------------------------------ */}

        <LargeScreenSection flexDirection='flex-col'>
          
        <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi text-9xl">
            <h1 className="opacity-40">myScores</h1>
          </SlideFadeIn>

          {/* Typewriter effect to dynamically display the title of the current video */}
          <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-2xl tracking-largep whitespace-nowrap">
            <p>
              <TypewriterEffect text='coming soon' />
            </p>
          </SlideFadeIn>
          
          <SlideFadeIn direction="left">
            
          </SlideFadeIn>

        </LargeScreenSection>
    </Section>
  )
}