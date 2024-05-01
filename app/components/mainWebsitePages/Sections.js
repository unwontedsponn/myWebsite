import Homepage from './Homepage/Homepage';
import AboutMe from './aboutMe/AboutMe';
import MyBook from './MyBook';
import Sponn from './Sponn';
import MyAnimations from './MyAnimations';
import MyScores from './MyScores';
import PktTutor from './PktTutor';

// This object determines which components to render based on the current section selected.
const sectionComponents = {
  benSpooner: [Homepage, AboutMe, MyBook], 
  sponn: [Sponn, MyAnimations, MyScores], 
  // pktTutor: [PktTutor],  
};

// Takes the current section and renders the corresponding components.
export default function Sections({ currentSection }) {
  // Retrieves the array of components for the current section or defaults to [Homepage] if undefined.
  const Components = sectionComponents[currentSection] || [Homepage];

  // Maps over the array of components and renders each as a React element.
  // The 'key' prop is used here to ensure React can manage the list of components efficiently.
  return (
    <>
      {Components.map((Component, index) => (
        <Component key={index} />  // Render each component with a unique key
      ))}
    </>
  );
}
