import { useState } from 'react';
import Section from '../../../utilityComponents/Section';
import LargeScreenSection from '../../../utilityComponents/LargeScreenSection';
import SlideFadeIn from '../../../utilityComponents/SlideFadeIn';
import TypewriterEffect from '@/app/components/utilityComponents/TypewriterEffect';
import Albums from './Albums';

export default function MyMusic() {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  const albums = [
    {
      src: '/images/sponnAlbumArtwork/lwf.jpg',
      alt: 'Left Where Found',
      title: 'Left Where Found',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/sponnMusic/lwf/Ablaze.wav', title: 'Ablaze' },
        { url: '/sponnMusic/lwf/Forget Me.wav', title: 'Forget Me' },
        { url: '/sponnMusic/lwf/Moment Before.wav', title: 'Moment Before' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/atgb.jpeg',
      alt: 'As Time Goes By',
      title: 'As Time Goes By',
      summary: 'ergldkjgklsehgksdhgleakshglkaehglaidushglkaudshgladkhg',
      tracks: [      
        { url: '/sponnMusic/atgb/All Along.wav', title: 'All Along' },
        { url: '/sponnMusic/atgb/Within.wav', title: 'Within' },
        { url: '/sponnMusic/atgb/So It Goes.wav', title: 'So It Goes' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/ktma.png',
      alt: 'Keep The Music Alive',
      title: 'Keep The Music Alive',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/sponnMusic/ktma/1. For The Taking.wav', title: 'For The Taking' },
        { url: '/sponnMusic/ktma/2. All Change.wav', title: 'All Change' },
        { url: '/sponnMusic/ktma/3. Apprehension.wav', title: 'Apprehension' },
        { url: '/sponnMusic/ktma/4. Resolveg.wav', title: 'Resolve' },
        { url: '/sponnMusic/ktma/5. Crystalline.wav', title: 'Crystalline' },
        { url: '/sponnMusic/ktma/6. Twilight.wav', title: 'Twilight' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/lwr.jpg',
      alt: 'Long Way Round',
      title: 'Long Way Round',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/sponnMusic/lwr/1. the odds.wav', title: 'The Odds' },
        { url: '/sponnMusic/lwr/2. strinde.wav', title: 'Strinde' },
        { url: '/sponnMusic/lwr/3. in the dark.wav', title: 'In The Dark' },
        { url: '/sponnMusic/lwr/4. northern lights.wav', title: 'Northern Lights' },
        { url: '/sponnMusic/lwr/5. coco.wav', title: 'Coco' },
        { url: '/sponnMusic/lwr/6. welcome to the world.wav', title: 'Welcome To The World' },
        { url: '/sponnMusic/lwr/7. salvation.wav', title: 'Salvation' },
        { url: '/sponnMusic/lwr/8. sur.wav', title: 'Sur' },
        { url: '/sponnMusic/lwr/9. through fingers.wav', title: 'Through Fingers' },
        { url: '/sponnMusic/lwr/10. one thing that i need.wav', title: 'One Thing That I Need' },
        { url: '/sponnMusic/lwr/11. thank you and good night.wav', title: 'Thank You and Good Night' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/tnt.jpg',
      alt: 'This Now This',
      title: 'This Now This',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/sponnMusic/tnt/this now this.wav', title: 'Thank You and Good Night' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/wwf.jpg',
      alt: 'When We Fell',
      title: 'When We Fell',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/sponnMusic/wwf/when we fell', title: 'When We Fell' },
      ],
    },
  ];

  const currentAlbum = albums[currentAlbumIndex];

  return (
    <Section id="myMusic">
      <LargeScreenSection paddingX='px-32'>
        {/* Left Column - Text */}
        <div className="flex flex-col w-2/3">
          <SlideFadeIn direction="left" className="color-blue font-gopher-mono-semi leading-none text-11xl">
            <h1 className="opacity-40">myMusic</h1>
          </SlideFadeIn>

          <SlideFadeIn direction="right" className="color-dark-blue font-gopher-mono underline text-decoration-color text-4xl pl-32 tracking-largep whitespace-nowrap">
            <p className="">
              <TypewriterEffect text={currentAlbum.title} />
            </p>
          </SlideFadeIn>

          <SlideFadeIn direction="up" className="color-dark font-gopher-mono text-md pt-6 text-right">
            <p className="max-w-3xl break-words">{currentAlbum.summary}</p>
          </SlideFadeIn>
        </div>

        {/* Right Column - Image and Breadcrumbs */}
        <SlideFadeIn className="w-1/3" direction="right">
          <Albums currentAlbumIndex={currentAlbumIndex} setCurrentAlbumIndex={setCurrentAlbumIndex} albums={albums} />
        </SlideFadeIn>
      </LargeScreenSection>
    </Section>
  );
}
