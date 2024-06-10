import Homepage from './components/*websites/benSpooner/Homepage/Homepage';
import AboutMe from './components/*websites/benSpooner/aboutMe/AboutMe';
import MyBook from './components/*websites/benSpooner/myBook/MyBook';
import Sponn from './components/*websites/sponn/sponnHomepage/Sponn';
import MyMusic from './components/*websites/sponn/myMusic/myMusic';
import MyScores from './components/*websites/sponn/myScores/MyScores';

const sectionComponents = {
  benSpooner: [
    { id: 'benSpooner', Component: Homepage },
    { id: 'aboutMe', Component: AboutMe },
    { id: 'myBook', Component: MyBook }
  ],
  sponn: [
    { id: 'sponn', Component: Sponn },
    { id: 'myMusic', Component: MyMusic },
    { id: 'myScores', Component: MyScores }
  ],
};

export default function Sections({ currentSection }) {
  const Components = sectionComponents[currentSection] || [{ id: 'benSpooner', Component: Homepage }];

  return (
    <>
      {Components.map(({ id, Component }, index) => (
        <section key={index} id={id}>
          <Component />
        </section>
      ))}
    </>
  );
}
