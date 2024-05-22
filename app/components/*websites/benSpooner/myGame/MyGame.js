"use client"
import Section from '../../../utilityComponents/Section';
import SmallScreenSection from '../../../utilityComponents/SmallScreenSection';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import TypewriterEffect from '../../../utilityComponents/TypewriterEffect';

export default function Game() {
  
  return (
    <Section id="myGame">
      
      <SmallScreenSection id="canvas-container" xlHidden={false} spaceY='space-y-4'>
        <h2 className="color-blue font-gopher-mono-semi opacity-40 leading-none text-8xl">myGame</h2>
        <p ref={ref} className="font-gopher-mono color-dark-blue underline text-decoration-color tracking-largep text-2xl">{inView && <TypewriterEffect text="Press space to jump" />}</p>
        <canvas ref={canvasRef} id="my-canvas" className="h-3/6 w-full md:w-5/6 xl:w-4/6 border-b-3 border-thick-border-gray"></canvas>
        <p id="timer" className="font-gopher-mono color-dark-blue underline text-decoration-color tracking-largep text-xl py-4">{formatTime(timer)}</p>
      </SmallScreenSection>
      
    </Section>
  );
}