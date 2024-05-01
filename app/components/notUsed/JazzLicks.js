// "use client";
// import { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// export default function JazzLicks() {
//   const [typingEffect, setTypingEffect] = useState('');
//   const { ref, inView } = useInView();
//   const [currentAbc, setCurrentAbc] = useState(''); // State to hold the currently displayed ABC notation.
//   const [numBars, setNumBars] = useState(1); // State to hold the number of bars to display.

//   // The full ABC notation of the music piece.
//   const fullAbcBars = [
//     "B B2 B B2 B2", "B2 B2 z B2 B", "B2 B2 B B2 B", "B B2 B B2 z2",
//     "B B2 B B B2 B", "B2 BB - BB B2", "z B2 B B2 B2", "z B2 B B2 z B",
//     "B2 B2 z B3", "z B3 B B2 B", "B B2 B2 B2 B", "z B2 B2 B2 z",
//     "B2 B2 B B2 B", "B B2 B B B2 B", "z B2 z B2 B2", "B2 z B - BB B2",
//     "z B2 z z B2 z", "z B3 B B2 B", "B2 BB - BB B2", "B B2 B B2 B2",
//     "B2 B2 B B2 B", "z B2 B z B2 B", "B2 z2 B B2 B", "B B2 z B B2 z",
//     "B2 B2 z B2 B", "B B2 B2 B2 B", "B2 z B2 B B2", "z B2 B B2 z2",
//     "B B2 B B B2 B", "B2 BB - BB B2", "z B2 B B2 B2", "B B2 B B2 z2",
//     "B B2 B B2 B2", "z B2 B2 B2 z", "B2 B2 z B2 B", "B2 BB - BB B2",
//     "z B2 B B2 B2", "B B2 B B2 z2", "B B2 B B B2 B", "B B2 B z4"
//   ];

//   // Function to randomize the selection of bars from the full notation.
// const randomizeBars = (num) => {
//   let selectedBars = [];
//   let barsCopy = [...fullAbcBars]; // Create a shallow copy to manipulate

//   while (selectedBars.length < num && barsCopy.length > 0) {
//     const randomIndex = Math.floor(Math.random() * barsCopy.length);
//     selectedBars.push(barsCopy[randomIndex]);
//     // Remove the selected bar to avoid duplicates, if desired
//     barsCopy.splice(randomIndex, 1);
//   }

//   // Prepend the ABC header before joining the selected bars, then append a final bar line.
//   const abcHeader = `X:1\nM:C\nL:1/8\nK:perc style=rhythm\nV:1\n`;
//   return abcHeader + selectedBars.join(' | ') + ' |]';
// };

//   // Handle selection of number of bars.
//   const handleBarSelection = (num) => {
//     setNumBars(num);
//     const newAbc = randomizeBars(num);
//     setCurrentAbc(newAbc);
//   };

//   // Handle randomizing the rhythm based on the current selection.
//   const handleRandomize = () => {
//     const newAbc = randomizeBars(numBars);
//     setCurrentAbc(newAbc);
//   };

//   // Typewriter effect to animate text when the component scrolls into view.
//   useEffect(() => {
//     let timeoutId;
//     if (inView) {
//       const fullText = "Phrasing, phrasing and more phrasing...";
//       let currentText = '';
//       let index = 0;
//       const typeLetter = () => {
//         if (index < fullText.length) {
//           currentText += fullText.charAt(index);
//           setTypingEffect(currentText);
//           index++;
//           timeoutId = setTimeout(typeLetter, 70);
//         }
//       };
//       typeLetter();
//     }
//     return () => clearTimeout(timeoutId);
//   }, [inView]);

//   // useEffect hook to initialize the ABC notation.
//   useEffect(() => {
//     setCurrentAbc(randomizeBars(numBars)); // Initialize with 2 bars on component mount
//   }, []);

//   // useEffect hook to render ABC notation whenever it changes.
//   useEffect(() => {
//     abcjs.renderAbc("music-notation", currentAbc, {}, { responsive: "resize" });
//   }, [currentAbc]);


//   return (
//     <section id="pocket-tutor2" className="pt-[var(--header-height)] pb-[var(--footer-height)] flex flex-col justify-center items-start w-full h-screen px-16 overflow-hidden">

//       <h2 
//         id="tutor-title2" 
//         className="
//           color-blue font-gopher-mono-semi opacity-40 pt-20 mb-0 pb-0 leading-none
//           text-5xl
//           md:text-9xl "
//           >
//             jazzLicks
//       </h2>

//       {/* <p 
//         ref={ref} 
//         className="
//           hidden md:block color-dark-blue font-gopher-mono underline text-decoration-color text-4xl mt-0 pt-0 leading-none pl-28 tracking-largep"
//         >
//           {typingEffect}
//       </p>  */}
      
//       <div className="flex flex-col justify-center items-center mt-10 w-full">

//         {/* Buttons to select 6 or 4 pattern type */}
//         <div className="flex gap-4 mb-4">
//         <button 
//             onClick={() => handleBarSelection(1)} 
//             className={`font-gopher-mono items-center py-1 px-2 ${numBars === 1 ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//           >
//             1
//           </button>
//           <button 
//             onClick={() => handleBarSelection(2)} 
//             className={`font-gopher-mono items-center py-1 px-2 ${numBars === 2 ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//           >
//             2
//           </button>
//           <button 
//             onClick={() => handleBarSelection(4)} 
//             className={`font-gopher-mono items-center py-1 px-2 ${numBars === 4 ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
//           >
//             4
//           </button>
//         </div>

//         {/* Randomise Button */}
//         <button onClick={handleRandomize} className="font-gopher-mono items-center color-dark border-3 border-thick-border-gray py-1 px-2 hover:bg-gray-200 mb-4">Randomise the Rhythm</button>

//         {/* ABC Notation */}
//         <div id="music-notation" className="flex justify-center w-full"></div>

//       </div>

//     </section>
//   );
// }
