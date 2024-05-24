import { useState, useRef } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import Breadcrumb from '@/app/components/utilityComponents/Breadcrumb';

const Albums = ({ currentAlbumIndex, setCurrentAlbumIndex, albums }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(new Audio());

  const currentAlbum = albums[currentAlbumIndex];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    audioRef.current.pause();
    setIsModalOpen(false);
    setCurrentTrack(null);
  };

  const togglePlayPause = (track) => {
    if (currentTrack === track) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      audioRef.current.src = track.url;
      audioRef.current.play();
      setCurrentTrack(track);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
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
          {/* <p className="text-white text-2xl font-bold font-gopher-mono">{currentAlbum.title}</p> */}
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
              <h2 className="text-2xl font-bold my-4 font-gopher-mono-semi">{currentAlbum.title}</h2>
              {currentAlbum.tracks.map((track, index) => (
                <div key={index} className="my-2 flex items-center justify-between">
                  <h3 className="text-lg font-gopher-mono">{track.title}</h3>
                  <button
                    onClick={() => togglePlayPause(track)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 font-gopher-mono"
                  >
                    {currentTrack === track && !audioRef.current.paused ? 'pause' : 'play'}
                  </button>
                </div>
              ))}
            </div>           
          </div>
          <Breadcrumb
            currentIndex={currentAlbumIndex}
            itemCount={albums.length}
            onBreadcrumbClick={setCurrentAlbumIndex}
          />
        </Modal>
      )}
    </div>
  );
};

export default Albums;
