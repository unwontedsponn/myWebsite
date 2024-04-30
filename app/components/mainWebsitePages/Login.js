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
    <section id="login" className="pt-[var(--header-height)] pb-[var(--footer-height)] flex flex-col w-full h-screen overflow-hidden">

        {/**
          * Small Screens Layout
          */
          /*--------------------------------------------------------------------------------------------------------------------*/
        }
        <div className="h-screen overflow-hidden flex justify-center items-center">
          
          {/* Login Button */}
          {/* <button className="font-gopher-mono items-center color-dark border-y-3 border-thick-border-gray py-1 px-2 hover:bg-gray-200" onClick={handleLogin}>Login</button> */}

          {/* COMING SOON banner */}
          <p className="font-gopher-mono items-center color-dark border-y-3 border-thick-border-gray py-1 px-2">COMING SOON</p>
        </div>

    </section>
  )
}