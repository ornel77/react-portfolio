import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "../src/scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

import LineGradient from "./components/LineGradient";


function App() {
  const [selectedPage, setSelectedPage] = useState('home') // determines what page we are on
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)") // check if the user browser is above or less than 1600px


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        { isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto">
          <Projects/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <Testimonials/>
      </div>
      <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
          <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
