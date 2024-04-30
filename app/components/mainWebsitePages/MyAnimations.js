import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/sectionsAndElements/LargeScreenSection';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';

export default function MyAnimations() {

  return (
    <Section id="myAnimations">

        {/**
          * Small Screens Layout
          */
          /*--------------------------------------------------------------------------------------------------------------------*/
        }
        <SmallScreenSection className="">


        </SmallScreenSection>

        {/* ------------------------------------------------------------------------------------------ */}

        <LargeScreenSection>
          

        </LargeScreenSection>
    </Section>
  )
}