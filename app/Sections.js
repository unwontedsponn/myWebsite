import Homepage from './components/*websites/benSpooner/Homepage/Homepage';
import AboutMe from './components/*websites/benSpooner/aboutMe/AboutMe';
import MyBook from './components/*websites/benSpooner/myBook/MyBook';
import Sponn from './components/*websites/sponn/sponnHomepage/Sponn';
import MyAnimations from './components/*websites/sponn/myAnimations/MyAnimations';
import MyScores from './components/*websites/sponn/myScores/MyScores';
import PktTutor from './components/*websites/pktT/PktTutor';

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
