// "use client"
// import Section from '../reusableComponents/sectionsAndElements/Section';
// import SmallScreenSection from '../reusableComponents/sectionsAndElements/SmallScreenSection';
// import { useEffect, useRef, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
// import TypewriterEffect from '../reusableComponents/TypewriterEffect';

// export default function GameOriginal() {
//   const [timer, setTimer] = useState(0); // Timer in seconds
//   const [gameActive, setGameActive] = useState(false); // State to track if the game is active
//   const canvasRef = useRef(null);
//   const requestRef = useRef();
//   const isJumpingRef = useRef(false);
//   const squareYRef = useRef();
//   const obstaclesRef = useRef([]);
//   const rotationRef = useRef(0);
//   const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

//   useEffect(() => {
//     // Reset game state and timer when the game comes into view
//     if (inView) {
//       setGameActive(true); // Start the game
//       setTimer(0); // Reset timer
//       obstaclesRef.current = []; // Clear obstacles
//     } else {
//       setGameActive(false); // Pause the game
//     }
//   }, [inView]);
  
//   useEffect(() => {
//     if (!gameActive) return;

//     // Timer logic
//     const intervalId = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1); // Increment the timer every second
//     }, 1000);

//     // Cleanup function to clear the interval
//     return () => clearInterval(intervalId);
//   }, [gameActive]);

//   useEffect(() => {
//     if (!gameActive) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     function resizeCanvas() {
//       canvas.width = canvas.parentElement.clientWidth;
//       canvas.height = canvas.parentElement.clientHeight;
//     }
  
//     // Call the resizeCanvas() function whenever the window is resized
//     window.addEventListener('resize', resizeCanvas);
    
//     // Initial call to set canvas size
//     resizeCanvas();

//     const groundY = canvas.height - 20;
//     squareYRef.current = groundY;
//     let velocity = 0;

//     const spawnObstacle = () => {

//       const minHeight = 20; // Minimum height of the obstacle
//       const maxHeight = 60; // Maximum height of the obstacle
//       const height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight); // Random height within the range

//       obstaclesRef.current.push({
//         x: canvas.width,
//         y: canvas.height - height, // Adjust y so the obstacle is grounded
//         width: 20,
//         height: height,
//       });
//     };

//     const jump = () => {
//       if (isJumpingRef.current) return;
//       isJumpingRef.current = true;
//       velocity = -10; 
//     };

//     const updateObstacles = () => {
//       obstaclesRef.current.forEach(obstacle => obstacle.x -= 3);
//       obstaclesRef.current = obstaclesRef.current.filter(obstacle => obstacle.x + obstacle.width > 0);
//     };

//     const update = () => {
//       if (!gameActive) return;
//       if (isJumpingRef.current) {
//         squareYRef.current += velocity;
//         velocity += 0.5;
//         rotationRef.current += 10; // Increment rotation angle when jumping
//         if (squareYRef.current > groundY) {
//           squareYRef.current = groundY;
//           isJumpingRef.current = false;
//           rotationRef.current = 0; // Reset rotation when landing
//         }
//       }
    
//       updateObstacles();
    
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//       // Set the rotation point to the center of the square and rotate
//       ctx.save(); // Save the current state
//       ctx.translate(50 + 10, squareYRef.current + 10); // Translate to the center of the square
//       ctx.rotate((Math.PI / 180) * rotationRef.current); // Rotate
//       ctx.fillStyle = '#407dbf';
//       ctx.fillRect(-10, -10, 20, 20); // Draw the square centered on the origin
//       ctx.restore(); // Restore the state
    
//       obstaclesRef.current.forEach(obstacle => {
//         ctx.fillStyle = '#c15564';
//         ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
//       });
    
//       requestRef.current = requestAnimationFrame(update);
//     };

//     const handleKeyDown = (event) => {
//       if (event.code === 'Space') { 
//         event.preventDefault(); // Prevent the default space bar action
//         jump();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     requestRef.current = requestAnimationFrame(update);

//     if (inView) {
//       obstaclesRef.current = []; // Clear obstacles when canvas comes into view
//     }
    
//     const obstacleInterval = setInterval(spawnObstacle, 2000); // Start spawning obstacles every 2 seconds

//     return () => {
//       cancelAnimationFrame(requestRef.current);
//       clearInterval(obstacleInterval);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [gameActive]);

//   // Function to format the timer into MM:SS
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60).toString().padStart(2, '0');
//     const seconds = (time % 60).toString().padStart(2, '0');
//     return `${minutes}:${seconds}`;
//   };
  
//   return (
//     <Section id="game">
      
//       <SmallScreenSection id="canvas-container" xlHidden={false} spaceY='space-y-4'>
//         <h2 className="color-blue font-gopher-mono-semi opacity-40 leading-none text-8xl">myGame</h2>
//         <p ref={ref} className="font-gopher-mono color-dark-blue underline text-decoration-color tracking-largep text-2xl">{inView && <TypewriterEffect text="Press space to jump" />}</p>
//         <canvas ref={canvasRef} id="my-canvas" className="h-3/6 w-full md:w-5/6 xl:w-4/6 border-b-3 border-thick-border-gray"></canvas>
//         <p id="timer" className="font-gopher-mono color-dark-blue underline text-decoration-color tracking-largep text-xl py-4">{formatTime(timer)}</p>
//       </SmallScreenSection>
      
//     </Section>
//   );
// }