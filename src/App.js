import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

import Navbar from "../src/scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";


function App() {
  const [selectedPage, setSeletedPage] = useState('home') // determines what page we are on
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)") // check if the user browser is above or less than 1600px


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true)
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSeletedPage={setSeletedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        { isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSeletedPage={setSeletedPage} />
        )}
        <Landing setSeletedPage={setSeletedPage} />
      </div>
    </div>
  );
}

export default App;
