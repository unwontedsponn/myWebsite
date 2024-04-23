import Section from '../reusableComponents/sectionsAndElements/Section';
import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
import LargeScreenSection from '../reusableComponents/sectionsAndElements/LargeScreenSection';
import SlideFadeIn from '../reusableComponents/SlideFadeIn';
import TypewriterEffect from '../reusableComponents/TypewriterEffect';
import YouTubeVideo from '../reusableComponents/YouTubeVideo';

export default function Game() {

  return (
    <Section id="game">
      <SmallScreenSection>
        <SlideFadeIn direction="right" className="color-blue font-gopher-mono-semi leading-none text-8xl sm:text-9xl"><p className="opacity-40">myGame</p></SlideFadeIn>
        <SlideFadeIn direction="left" className="color-dark-blue font-gopher-mono underline text-decoration-color text-2xl px-10 tracking-largep text-center max-w-4xl"><p className="">This game is not designed to run on your device. To play, please view on a larger screen.</p></SlideFadeIn>

        {/* Gif on smallest screen */}
        <SlideFadeIn direction="up">
          <img src="images/ktma gif.gif" alt="" className="sm:hidden border-3 border-thick-border-gray"/>
        </SlideFadeIn>

        {/* Video on small screen and up */}
        <SlideFadeIn direction="up">
          <YouTubeVideo videoId="F-Jwi3qBtZE" />
        </SlideFadeIn>
        
        <p className="hidden sm:px-24 sm:text-xs font-gopher-mono">Keep The Music Alive tells the story of a budding composer, eager to make his mark. To pass each level he must keep moving, overcoming obstacles to finish writing his masterpiece. This retro 2D platform game features a stunning Contemporary Jazz/Classical soundtrack by award winning artist Sponn, which the player shapes in real-time as they play, blurring the boundaries between being a listener and an active creator of this mini album.

        How To Play: To keep the music alive you must overcome the obstacles in your path, by jumping over them, or moving around them. Simple right? Not really, you'll see... 

        Jump = SPACE BAR 
        Left/Right = ARROW KEYS 

        Tokens transform the music you're creating. Each colour in a different way for you to discover. They also make you invincible against any obstacle. Each time you complete a level, you have completed an entire piece of music.</p>
      </SmallScreenSection>
      {/* ------------------------------------------------------------------------------------------ */}
      <LargeScreenSection flexDirection="flex-col" breakpoint='lg'>
        
        {/* <SlideFadeIn direction="left">
          <p className="text-center font-gopher-mono-semi opacity-40 color-blue text-8xl pb-2 leading-none">myGame</p>
        </SlideFadeIn> */}

        {/* <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl pb-6 tracking-largep whitespace-nowrap">
          <p className=""><TypewriterEffect text="click me to start..." /></p>
        </SlideFadeIn> */}

        <SlideFadeIn direction="left">
          <iframe src="ktma/index.html" width="960" height="645"></iframe>
        </SlideFadeIn>
      </LargeScreenSection>
    </Section>
  );
}
