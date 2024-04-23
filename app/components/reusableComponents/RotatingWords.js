import { useState, useEffect } from 'react';

export default function RotatingWords({ words, intervalDuration = 1500 }) {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((currentWord) => (currentWord + 1) % words.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <p>
      {words[currentWord]}
    </p>
  );
}
