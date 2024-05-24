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
        { url: '/music/track5.mp3', title: 'Track 5' },
        { url: '/music/track6.mp3', title: 'Track 6' },
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
        { url: '/sponnMusic/atgb/1. For The Taking.wav', title: 'For The Taking' },
        { url: '/music/track4.mp3', title: 'Track 4' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/lwr.jpg',
      alt: 'Long Way Round',
      title: 'Long Way Round',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/music/track7.mp3', title: 'Track 7' },
        { url: '/music/track8.mp3', title: 'Track 8' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/tnt.jpg',
      alt: 'This Now This',
      title: 'This Now This',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/music/track9.mp3', title: 'Track 9' },
        { url: '/music/track10.mp3', title: 'Track 10' },
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/wef.jpg',
      alt: 'When We Fellef',
      title: 'When We Fell',
      summary: 'akjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekraakjfhblaskdfblaksbgfkalsbgask;gna;ksgfa;ksdgfhekra',
      tracks: [
        { url: '/music/track11.mp3', title: 'Track 11' },
        { url: '/music/track12.mp3', title: 'Track 12' },
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
