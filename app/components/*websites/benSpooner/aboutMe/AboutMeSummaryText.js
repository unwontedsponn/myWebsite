import { useState } from "react";
import Breadcrumb from "../../../utilityComponents/Breadcrumb";
import SlideFadeIn from "../../../utilityComponents/SlideFadeIn";
import Arrow from "@/app/components/utilityComponents/Arrow";

export default function AboutMeSummaryText({ }) {
  const [textIndex, setTextIndex] = useState(0); // State to control which text is shown
  const [touchStart, setTouchStart] = useState(null); // State to hold the starting X position of a touch
  const [touchEnd, setTouchEnd] = useState(null); // State to hold the ending X position of a touch
  
  const textOptions = [
    <>
      <p>Hello there! I&apos;m <span className="font-gopher-mono-semi">Ben Spooner</span>, a musician, javascript developer and technical support engineer at Neat. My journey into the tech world was anything but conventional. After a successful 15-year career as a business owner providing music and audio services, I embarked on a new adventure in web development. This leap was bolstered when I secured a scholarship for a highly competitive Software Engineering & Data Science course, standing out among 20,000 applicants.</p>
    </>,
    <>
      <p><span className="font-gopher-mono-semi color-green ">A Glimpse into My Tech Journey:</span></p>
      <p>{`My coding journey began unexpectedly while pursuing an MSc in Music and Sound for Film and Games. Diving into C# to integrate sound into computer games using Unity Game Engine, I discovered a newfound passion. This led me down the path of self-taught programming, culminating in the creation of several projects using Next.Js, Tailwind CSS & Vercel (including this website).`}</p>
    </>,
    <>
      <p><span className="font-gopher-mono-semi color-green">A Brief History of My Audio Endeavors:</span></p>
      <p>{`Over the last decade and a half, I've worn many hats in the audio world - from performing with Joy Crookes and touring at the Edinburgh Festival to teaching ABRSM and examining for RSL. My composition skills were showcased in the award-winning short film 'When We Fell', which garnered international acclaim and several awards, including nominations from the British Animation Awards. Presently, I channel my musical creativity through independent releases as Sponn and Green and Pine.`}</p>
    </>,
    <>
      <p><span className="font-gopher-mono-semi color-green">A Little More About Me:</span></p>
      <p><span className="font-gopher-mono-semi">Age:</span> 34 years young</p>
      <p><span className="font-gopher-mono-semi">Favourite Book:</span> Hear The Wind Sing</p>
      <p><span className="font-gopher-mono-semi">Tech Stack:</span> Next.js, Tailwind CSS & Vercel</p>
      <p><span className="font-gopher-mono-semi">Sound Stack:</span> Logic X, Sibelius & FMOD</p>
      <p><span className="font-gopher-mono-semi">Hobbies:</span> Reading, learning, walking, creating, cooking, eating, Dad-ing!</p>
      <p><span className="font-gopher-mono-semi">Extra Links:</span> 
        <a href="https://github.com/unwontedsponn" className="hover:underline"> GitHub</a> |
        <a href="https://www.linkedin.com/in/ben-spooner-12aab937/" className="hover:underline"> LinkedIn</a> |
        <a href="https://sponn.itch.io/keep-the-music-alive" className="hover:underline"> KTMA</a> |
        <a href="https://medium.com/@benspooner" className="hover:underline"> Blog</a>
      </p>
    </>,
  ];

  const nextPage = () => {
    setTextIndex(current => (current + 1) % textOptions.length); // Increment text index, wrap around
  };

  const previousPage = () => {
    setTextIndex(current => (current - 1 + textOptions.length) % textOptions.length); // Decrement text index, wrap around
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart - touchEnd > 50) {
      // Right to Left swipe
      nextPage();
    }
    if (touchStart - touchEnd < -50) {
      // Left to Right swipe
      previousPage();
    }
  };

  return (
    <div className="flex flex-row pt-6 max-w-3xl" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

      <div className="flex flex-col w-full text-center xl:text-right px-2">
        <div className="flex">
          <Arrow direction="left" onClick={previousPage} width={50} height={50} />
          <SlideFadeIn direction="up">
            <div className="color-dark font-gopher-mono text-xs md:text-sm cursor-pointer">
              {textOptions[textIndex]}
            </div>
          </SlideFadeIn>
          <Arrow direction="right" onClick={nextPage} width={50} height={50} />
        </div>
        <SlideFadeIn direction="right">
          <Breadcrumb currentIndex={textIndex} itemCount={textOptions.length} onBreadcrumbClick={(index) => setTextIndex(index)}/>
        </SlideFadeIn>
      </div>

    </div>
  )
}