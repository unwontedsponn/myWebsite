import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import Breadcrumb from '@/app/components/utilityComponents/Breadcrumb';
import VideoModal from './VideoModal'; // Import the new VideoModal component

const Albums = ({ currentAlbumIndex, setCurrentAlbumIndex, albums, setActiveView, activeView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume at 50%
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const audioRef = useRef(new Audio());

  const currentAlbum = albums[currentAlbumIndex];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    audioRef.current.pause();
    setIsModalOpen(false);
    setCurrentTrack(null);
    setIsPlaying(false);
    setActiveView('listen'); // Reset to the default view
  };

  const togglePlayPause = (track) => {
    if (currentTrack === track) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      audioRef.current.src = track.url;
      audioRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;

    // Update the CSS variable for the progress
    event.target.style.setProperty('--progress', `${newVolume * 100}%`);
  };

  useEffect(() => {
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audioRef.current.addEventListener('pause', handlePause);
    audioRef.current.addEventListener('play', handlePlay);

    // Set initial volume
    audioRef.current.volume = volume;

    return () => {
      audioRef.current.removeEventListener('pause', handlePause);
      audioRef.current.removeEventListener('play', handlePlay);
    };
  }, [volume]);

  const openVideoModal = (videoId) => {
    setCurrentVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoId(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between w-full border-b pb-4">
        <button
          onClick={() => setActiveView('listen')}
          className={`text-sm px-4 py-2 font-gopher-mono ${activeView === 'listen' ? 'outline bg-white text-black' : 'bg-black text-white hover:bg-white hover:outline hover:text-black'}`}
        >
          Tracks
        </button>
        {albums.some(album => album.transcription && album.transcription.length > 0) && (
          <button
            onClick={() => setActiveView('transcriptions')}
            className={`text-sm px-4 py-2 font-gopher-mono ${activeView === 'transcriptions' ? 'outline bg-white text-black' : 'bg-black text-white hover:bg-white hover:outline hover:text-black'}`}
          >
            Transcriptions
          </button>
        )}
        {albums.some(album => album.shortFilm && album.shortFilm.length > 0) && (
          <button
            onClick={() => setActiveView('shortFilms')}
            className={`text-sm px-4 py-2 font-gopher-mono ${activeView === 'shortFilms' ? 'outline bg-white text-black' : 'bg-black text-white hover:bg-white hover:outline hover:text-black'}`}
          >
            Short Films
          </button>
        )}
      </div>

      <div
        className="relative group border-3 border-thick-border-gray cursor-pointer overflow-hidden"
        onClick={openModal}
      >
        <Image
          src={currentAlbum.src}
          alt={currentAlbum.alt}
          layout="responsive"
          width={500}
          height={500}
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
          <p className="text-white text-5xl font-gopher-mono">{`Listen Now`}</p>
        </div>
      </div>

      <Breadcrumb
        currentIndex={currentAlbumIndex}
        itemCount={albums.length}
        onBreadcrumbClick={setCurrentAlbumIndex}
      />

      {isModalOpen && currentAlbum && (
        <Modal onClose={closeModal}>
          <div className="flex justify-center space-x-4 pb-4">
            <button
              onClick={() => setActiveView('listen')}
              className={`text-sm px-4 py-2 font-gopher-mono ${activeView === 'listen' ? 'outline bg-white text-black' : 'bg-black text-white hover:bg-white hover:outline hover:text-black'}`}
            >
              Tracks
            </button>
            {albums.some(album => album.transcription && album.transcription.length > 0) && (
              <button
                onClick={() => setActiveView('transcriptions')}
                className={`text-sm px-4 py-2 font-gopher-mono ${activeView === 'transcriptions' ? 'outline bg-white text-black' : 'bg-black text-white hover:bg-white hover:outline hover:text-black'}`}
              >
                Transcriptions
              </button>
            )}
            {albums.some(album => album.shortFilm && album.shortFilm.length > 0) && (
              <button
                onClick={() => setActiveView('shortFilms')}
                className={`text-sm px-4 py-2 font-gopher-mono ${activeView === 'shortFilms' ? 'outline bg-white text-black' : 'bg-black text-white hover:bg-white hover:outline hover:text-black'}`}
              >
                Short Films
              </button>
            )}
          </div>
          <div className="p-4 flex">
            <div className="flex-shrink-0 w-64">
              <Image
                src={currentAlbum.src}
                alt={currentAlbum.alt}
                width={256}
                height={256}
                objectFit="cover"
                className="border-3 border-thick-border-gray"
              />
            </div>
            <div className="flex-1 pl-4">
              <h2 className="text-2xl font-bold my-4">{currentAlbum.title}</h2>

              {/* Listen to the Music Tracks */}
              {activeView === 'listen' && (
                <div className="overflow-y-auto" style={{ maxHeight: '11rem' }}>
                  {currentAlbum.tracks.map((track, index) => (
                    <div key={index} className="my-2 flex items-center justify-between">
                      <h3 className="text-lg">{`- ${track.title}`}</h3>
                      <button
                          onClick={() => togglePlayPause(track)}
                          className="text-xs bg-black text-white px-4 py-2 hover:bg-white hover:outline hover:text-black font-gopher-mono mr-2"
                        >
                          {currentTrack === track && isPlaying ? 'pause' : 'play'}
                        </button>
                    </div>
                  ))}
                  {/* Volume Slider */}
                  <div className="pt-2 border-t">
                    <p className="text-xs text-center font-gopher-mono">Volume Slider</p>
                    <input
                      type="range"
                      id="volume"
                      name="volume"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-full"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                </div>
                
              )}

              

              {/* Watch the Transcriptions */}
              {activeView === 'transcriptions' && currentAlbum.transcription && (
                <div className="overflow-y-auto" style={{ maxHeight: '10rem' }}>
                  {currentAlbum.transcription.map((transcription, index) => (
                    <div key={index} className="my-2 flex items-center justify-between">
                      <h3 className="text-lg">{`- ${transcription.title}`}</h3>
                      <button
                        onClick={() => openVideoModal(transcription.src.split('v=')[1].split('&')[0])}
                        className="mr-2 text-xs bg-black text-white px-4 py-2 hover:bg-white hover:outline hover:text-black font-gopher-mono mr-2"
                      >
                        Watch Video
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Watch the Short Films */}
              {activeView === 'shortFilms' && currentAlbum.shortFilm && (
                <div className="overflow-y-auto" style={{ maxHeight: '10rem' }}>
                  {currentAlbum.shortFilm.map((shortFilm, index) => (
                    <div key={index} className="my-2 flex items-center justify-between">
                      <h3 className="text-lg">{`- ${shortFilm.title}`}</h3>     
                      <button
                        onClick={() => openVideoModal(shortFilm.src.split('v=')[1].split('&')[0])}
                        className="mr-2 text-xs bg-black text-white px-4 py-2 hover:bg-white hover:outline hover:text-black font-gopher-mono mr-2"
                      >
                        Watch Video
                      </button>                 
                    </div>
                  ))}
                </div>
              )}              
            </div>
          </div>
          <Breadcrumb
            currentIndex={currentAlbumIndex}
            itemCount={albums.length}
            onBreadcrumbClick={setCurrentAlbumIndex}
          />
        </Modal>
      )}

      {isVideoModalOpen && (
        <VideoModal
          videoId={currentVideoId}
          onClose={closeVideoModal}
        />
      )}
    </div>
  );
};

export default Albums;
