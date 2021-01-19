import React from "react";
import {GlobalStyle} from "./styles/GlobalStyled";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Bio from "./Components/Bio/Bio";
import {Achievements} from "./Components/Achievements/Achievements";
import TitanPanel from "./Components/TitanPanel/TitanPanel";
function App() {
  return (
      <>
        <GlobalStyle/>
            <TitanPanel />
            <Header />
            <Bio />
            <Projects />
            <Achievements />
            <Footer/>
      </>
  );
}

export default App;
