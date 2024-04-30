import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/sectionsAndElements/LargeScreenSection';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';

export default function MyScores() {

  return (
    <Section id="myScores">

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