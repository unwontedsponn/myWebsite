import { useState } from "react";
import Arrow from "./sectionsAndElements/Arrow";
import Breadcrumb from "./Breadcrumb";
import SlideFadeIn from "./SlideFadeIn";

export default function AboutMeText() {

  const [textIndex, setTextIndex] = useState(0); // State to control which text is shown
  const textOptions = [
    <>
      <p>Hello there! I'm <span className="font-gopher-mono-semi">Ben Spooner</span>, a multifaceted professional blending passions in technology, music, and art. My journey into the tech world was anything but conventional. After a successful 15-year tenure as a business owner providing music and audio services, I embarked on a new adventure in web development. This leap of faith was bolstered when I secured a scholarship for a highly competitive Software Engineering & Data Science course, standing out among 20,000 applicants.</p>
    </>,
    <>
      <p><span className="font-gopher-mono-semi color-green ">A Glimpse into My Tech Journey:</span></p>
      <p>My coding saga began unexpectedly while pursuing an MSc in Music and Sound. Diving into C# to integrate sound into computer games using Unity Game Engine, I discovered a newfound passion. This led me down the path of self-taught programming, culminating in the creation of this portfolio website from the ground up using Next.Js, Tailwind CSS & Three.js.</p>
    </>,
    <>
      <p><span className="font-gopher-mono-semi color-green">A Brief History of My Audio Endeavors:</span></p>
      <p>Over the last decade and a half, I've worn many hats in the audio world - from performing with Joy Crookes and touring at the Edinburgh Festival to teaching ABRSM and examining for RSL. My composition skills were showcased in the award-winning short film When We Fell, which garnered international acclaim and several awards, including nominations from the British Animation Awards. Presently, I channel my musical creativity through independent releases as Sponn and Green and Pine.</p>
    </>,
    <>
      <p><span className="font-gopher-mono-semi color-green">A Little More About Me:</span></p>
      <p><span className="font-gopher-mono-semi">Age:</span> 34 years young</p>
      <p><span className="font-gopher-mono-semi">Favourite Book:</span> Hear The Wind Sing</p>
      <p><span className="font-gopher-mono-semi">Tech Stack:</span> Next.js, Tailwind CSS & Three.js</p>
      <p><span className="font-gopher-mono-semi">Sound Stack:</span> Logic X, Sibelius & FMOD</p>
      <p><span className="font-gopher-mono-semi">Education:</span> Music and Sound for Film and Games (MSc) - Distinction</p>
      <p><span className="font-gopher-mono-semi">Hobbies:</span> Reading, walking, eating, learning, cooking & creating</p>
      <p><span className="font-gopher-mono-semi">Extra Links:</span> GitHub | LinkedIn | KTMA | Blog</p>
      <p><span className="font-gopher-mono-semi">Fun Fact:</span> I once unexpectedly jammed with the British pop icon Adam Ant at a North London gig.</p>
    </>,
    <>
      <p><span className="font-gopher-mono-semi color-green">Current projects:</span></p>
      <p><span className="font-gopher-mono-semi">Integrated Training Environment (ITE):</span>"Realtime rhythm training via midi devices and Bela.io hardware."</p>
      <p><span className="font-gopher-mono-semi">Music Maker Network podcast (MMN):</span> "Where we chat to the people, that make music happen".</p>
      <p>For a deeper dive into my work and adventures, check out my YouTube channel.</p>
    </>
  ];

  const changeText = (direction) => {
    setTextIndex((current) => {
      // Calculate the new index based on the direction
      const newIndex = direction === 'left' ? current - 1 : current + 1;
      // Adjust the index to wrap around the text options array
      return (newIndex + textOptions.length) % textOptions.length;
    });
  };

  return (
    <div className="flex flex-row pt-6 max-w-3xl">

      <SlideFadeIn direction="down">
        <Arrow direction="left" onClick={() => changeText("left")} width={50} height={50} />
      </SlideFadeIn>

      <div className="flex flex-col w-full text-center xl:text-right px-2">
        <SlideFadeIn direction="up">
          <div className="color-dark font-gopher-mono text-xs sm:text-sm">{textOptions[textIndex]}</div>
        </SlideFadeIn>
        <SlideFadeIn direction="right">
          <Breadcrumb currentIndex={textIndex} itemCount={textOptions.length} onBreadcrumbClick={(index) => setTextIndex(index)}/>
        </SlideFadeIn>
      </div>

      <SlideFadeIn direction="down">
        <Arrow direction="right" onClick={() => changeText("right")} width={50} height={50} />
      </SlideFadeIn>

    </div>
  )
}