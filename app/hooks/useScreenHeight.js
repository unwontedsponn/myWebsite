"use client"
import { useState, useEffect } from 'react';

const useScreenHeight = () => {
  // Create a state variable 'height' with the initial value set to the current window inner height.
  const [height, setHeight] = useState(window.innerHeight);

  // Use the useEffect hook to perform side effects in this functional component.
  useEffect(() => {
    // Define a function that updates the 'height' state variable to the current window inner height.
    const handleResize = () => setHeight(window.innerHeight);

    // Add an event listener that executes handleResize when the window's resize event is triggered.
    window.addEventListener('resize', handleResize);

    // Return a cleanup function that removes the resize event listener from the window.
    // This prevents memory leaks and ensures that the component unmounts correctly.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // An empty dependency array means this effect runs only once after the initial render.

  // Return the current height so it can be used by components that utilize this hook.
  return height;
};

// Export the custom hook so it can be used in other parts of the application.
export default useScreenHeight;
