"use client";
import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { combinations } from '../pktTutorPatterns/six-3-2';
import { fourCombinations } from '../pktTutorPatterns/four-3-2';
import Card from '../reusableComponents/sectionsAndElements/Card';
import Image from 'next/image';

const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

export default function PktTutor() {

  const [typingEffect, setTypingEffect] = useState('');
  const [randomCombination, setRandomCombination] = useState(null);
  const [combinationIndex, setCombinationIndex] = useState(null);
  // State to track the current selection ('six' or 'four')
  const [patternType, setPatternType] = useState('six');
  const { ref, inView } = useInView();

  // Function to randomize based on the current patternType selection
  const randomizeCombination = () => {
    const patterns = patternType === 'six' ? combinations : fourCombinations;
    if (patterns.length > 0) {
      const randomIndex = getRandomIndex(patterns);
      const selectedPattern = patterns[randomIndex];
      
      // Make sure selectedPattern contains the complete structure expected by the Card component
      setRandomCombination(selectedPattern);
      setCombinationIndex(randomIndex + 1); // Update to reflect 1-based index
    }
  };

  useEffect(() => {
    // Initialize with a random combination from 'six-3-2' patterns on mount
    randomizeCombination();
  }, [patternType]); // Rerun randomization when patternType changes

  useEffect(() => {
    let timeoutId;
    if (inView) {
      const fullText = "Precision in your pocket";
      let currentText = '';
      let index = 0;
      const typeLetter = () => {
        if (index < fullText.length) {
          currentText += fullText.charAt(index);
          setTypingEffect(currentText);
          index++;
          timeoutId = setTimeout(typeLetter, 70);
        }
      };
      typeLetter();
    }
    return () => clearTimeout(timeoutId);
  }, [inView]);

  if (!randomCombination) return <div>Loading...</div>;

  return (
    <Section id="pocket-tutor">

      <SmallScreenSection py='py-10' xlHidden={false}>

          <h2 id="tutor-title" className="text-center color-blue font-gopher-mono-semi opacity-40 text-7xl">pktTutor</h2>

            {/* Buttons to select 6 or 4 pattern type */}
            <div className="mb-4">
              <div className="font-gopher-mono text-center">Choose Time signature:</div>

              <div className="flex flex-row gap-4 justify-center">
                <button
                  className={`font-gopher-mono items-center ${patternType === 'six' ? 'bg-gray-200' : 'border-thick-border-gray'} py-1 px-2 hover:bg-gray-200`}
                  onClick={() => setPatternType('six')}
                >
                  6
                </button>
                <button
                  className={`font-gopher-mono items-center ${patternType === 'four' ? 'bg-gray-200' : 'border-thick-border-gray'} py-1 px-2 hover:bg-gray-200 ml-2`}
                  onClick={() => setPatternType('four')}
                >
                  4
                </button>
              </div>
            </div>

            <div className="font-gopher-mono inline-flex items-center border">
              <Image
                src="images/magnifying glass.svg"
                width={500}
                height={500}
                alt="Magnifying glass"
                className="h-[1em]"
              />
              <input type="text" 
                placeholder="Search cards..." 
                className="font-gopher-mono outline-none py-1 px-2 rounded-md"
                aria-label="Search" />
            </div>

            {/* Randomise Button */}
            <button className="font-gopher-mono items-center color-dark border-3 border-thick-border-gray py-1 px-2 hover:bg-gray-200 mb-4" onClick={randomizeCombination}>Randomise the Card</button>

            <Card 
              title={`Combination Pattern ${combinationIndex}`}
              rightHand={randomCombination.rightHand}
              leftHand={randomCombination.leftHand}
              kick={randomCombination.kick}
              hhf={randomCombination.hhf}
            />

            <div className="flex gap-4 mb-4">

              <div className="font-gopher-mono flex items-center">Completed?</div>

              <button
                className={`font-gopher-mono items-center ${patternType === 'six' ? 'bg-gray-200' : 'border-thick-border-gray'} py-1 px-2 hover:bg-gray-200`}
                onClick={() => setPatternType('six')}
              >
                Yes
              </button>
              <button
                className={`font-gopher-mono items-center ${patternType === 'four' ? 'bg-gray-200' : 'border-thick-border-gray'} py-1 px-2 hover:bg-gray-200 ml-2`}
                onClick={() => setPatternType('four')}
              >
                Almost
              </button>
              <button
                className={`font-gopher-mono items-center ${patternType === 'four' ? 'bg-gray-200' : 'border-thick-border-gray'} py-1 px-2 hover:bg-gray-200 ml-2`}
                onClick={() => setPatternType('four')}
              >
                No
              </button>

            </div>

      </SmallScreenSection>

    </Section>
  );
}
