import { useState, useEffect } from 'react';
import Section from '../../../utilityComponents/Section';
import LargeScreenSection from '../../../utilityComponents/LargeScreenSection';
import SlideFadeIn from '../../../utilityComponents/SlideFadeIn';
import TypewriterEffect from '@/app/components/utilityComponents/TypewriterEffect';
import Albums from './Albums';

export default function MyMusic() {
  const albums = [
    {
      src: '/images/sponnAlbumArtwork/lwf.jpg',
      alt: 'Left Where Found',
      title: 'Left Where Found',
      summary: '',
      tracks: [
        { url: '/sponnMusic/lwf/Ablaze.wav', title: 'Ablaze' },
        { url: '/sponnMusic/lwf/Forget Me.wav', title: 'Forget Me' },
        { url: '/sponnMusic/lwf/Moment Before.wav', title: 'Moment Before' },
      ],
      transcription: [
        { src: 'https://www.youtube.com/watch?v=Cz-0kuzMMbg&ab_channel=BenSpooner', title: 'Ablaze' },        
        { src: 'https://www.youtube.com/watch?v=dGM3eX_edB0&ab_channel=BenSpooner', title: 'Forget Me' },        
        { src: 'https://www.youtube.com/watch?v=y0ucm2FSpao&ab_channel=BenSpooner', title: 'Moment Before' },        
      ],
      shortFilm: false
    },
    {
      src: '/images/sponnAlbumArtwork/atgb.jpeg',
      alt: 'As Time Goes By',
      title: 'As Time Goes By',
      summary: '',
      tracks: [      
        { url: '/sponnMusic/atgb/All Along.wav', title: 'All Along' },
        { url: '/sponnMusic/atgb/Within.wav', title: 'Within' },
        { url: '/sponnMusic/atgb/So It Goes.wav', title: 'So It Goes' },
      ],
      transcription: [
        { src: 'https://www.youtube.com/watch?v=PXaL5VfRFKc&ab_channel=BenSpooner', title: 'All Along' },        
        { src: 'https://www.youtube.com/watch?v=kBSpMXkw6EA&ab_channel=BenSpooner', title: 'Within' },        
        { src: 'https://www.youtube.com/watch?v=rEK0MSwtFlo&ab_channel=BenSpooner', title: 'So It Goes' }, 
      ],
      shortFilm: [
        { src: 'https://www.youtube.com/watch?v=DRqjaJgaO_E&ab_channel=BenSpooner', title: 'So It Goes' },                
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/ktma.png',
      alt: 'Keep The Music Alive',
      title: 'Keep The Music Alive',
      summary: '',
      tracks: [
        { url: '/sponnMusic/ktma/1. For The Taking.wav', title: 'For The Taking' },
        { url: '/sponnMusic/ktma/2. All Change.wav', title: 'All Change' },
        { url: '/sponnMusic/ktma/3. Apprehension.wav', title: 'Apprehension' },
        { url: '/sponnMusic/ktma/4. Resolveg.wav', title: 'Resolve' },
        { url: '/sponnMusic/ktma/5. Crystalline.wav', title: 'Crystalline' },
        { url: '/sponnMusic/ktma/6. Twilight.wav', title: 'Twilight' },
      ],
      transcription: [
        { src: 'https://www.youtube.com/watch?v=8JiFKQNVny0&ab_channel=BenSpooner', title: 'For The Taking' },                
      ],
      shortFilm: false
    },
    {
      src: '/images/sponnAlbumArtwork/lwr.jpg',
      alt: 'Long Way Round',
      title: 'Long Way Round',
      summary: '',
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
      transcription: false,
      shortFilm: false
    },
    {
      src: '/images/sponnAlbumArtwork/tnt.jpg',
      alt: 'This Now This',
      title: 'This Now This',
      summary: '',
      tracks: [
        { url: '/sponnMusic/tnt/this now this.wav', title: 'Thank You and Good Night' },
      ],
      transcription: [
        { src: 'https://www.youtube.com/watch?v=0lQIO4b-g9w&ab_channel=BenSpooner', title: 'This Now This' },                
      ],
      shortFilm: [
        { src: 'https://www.youtube.com/watch?v=1zlcipBv_ME&t=154s&ab_channel=BenSpooner', title: 'This Now This' },                
      ],
    },
    {
      src: '/images/sponnAlbumArtwork/wwf.jpg',
      alt: 'When We Fell',
      title: 'When We Fell',
      summary: '',
      tracks: [
        { url: '/sponnMusic/wwf/when we fell', title: 'When We Fell' },
      ],
      transcription: [
        { src: 'https://www.youtube.com/watch?v=sYrvUKESY2A&ab_channel=BenSpooner', title: 'When We Fell' },                
      ],
      shortFilm: [
        { src: 'https://www.youtube.com/watch?v=XenuFH6qTdM&t=111s&ab_channel=BenSpooner', title: 'When We Fell' },                
      ],
    },
  ];

  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
  const [activeView, setActiveView] = useState('listen'); // New state to track the active view
  const [filteredAlbums, setFilteredAlbums] = useState(albums);

  useEffect(() => {
    // Filter albums based on the active view
    const filterAlbums = () => {
      switch (activeView) {
        case 'transcriptions':
          return albums.filter(album => album.transcription && album.transcription.length > 0);
        case 'shortFilms':
          return albums.filter(album => album.shortFilm && album.shortFilm.length > 0);
        default:
          return albums;
      }
    };

    setFilteredAlbums(filterAlbums());
    setCurrentAlbumIndex(0); // Reset index when changing views
  }, [activeView]);

  const currentAlbum = filteredAlbums[currentAlbumIndex];

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
          <Albums
            currentAlbumIndex={currentAlbumIndex}
            setCurrentAlbumIndex={setCurrentAlbumIndex}
            albums={filteredAlbums}
            setActiveView={setActiveView}
            activeView={activeView}
          />
        </SlideFadeIn>
      </LargeScreenSection>
    </Section>
  );
}
