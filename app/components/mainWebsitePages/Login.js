import Section from "../reusableComponents/sectionsAndElements/Section";
import SmallScreenSection from "../reusableComponents/sectionsAndElements/SmallScreenSection";


export default function Login({onLoginSuccess}) {

  // This function simulates a login action
  const handleLogin = () => {
    // Implement login logic here
    // For demonstration, we'll call onLoginSuccess directly
    onLoginSuccess();
  };

  return (
    <section id="homepage" className="pt-[var(--header-height)] pb-[var(--footer-height)] flex flex-col w-full h-screen overflow-hidden">

        {/**
          * Small Screens Layout
          */
          /*--------------------------------------------------------------------------------------------------------------------*/
        }
        <div className="h-screen overflow-hidden flex justify-center items-center">
          <button className="font-gopher-mono items-center color-dark border-y-3 border-thick-border-gray py-1 px-2 hover:bg-gray-200" onClick={handleLogin}>Login</button>
          {/* <button className="font-gopher-mono items-center color-dark border-3 border-thick-border-gray py-1 px-2 hover:bg-gray-200 mb-4" onClick={randomizeCombination}>Login</button> */}
        </div>

    </section>
  )
}