import Homepage from './benSpoonerWebsite/Homepage/Homepage';
import AboutMe from './benSpoonerWebsite/aboutMe/AboutMe';
import MyBook from './benSpoonerWebsite/myBook/MyBook';
import Sponn from './sponnWebsite/sponnHomepage/Sponn';
import MyAnimations from './sponnWebsite/myAnimations/MyAnimations';
import MyScores from './sponnWebsite/myScores/MyScores';
import PktTutor from './pktTWebsite/PktTutor';

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
