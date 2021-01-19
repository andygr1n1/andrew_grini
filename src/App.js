import React from "react";
import {ParallaxProvider} from 'react-scroll-parallax';
import {GlobalStyle} from "./styles/GlobalStyled";
import Header from "./Page/Header/Header";
import Projects from "./Page/Projects/Projects";
import Footer from "./Page/Footer/Footer";
import Bio from "./Page/Bio/Bio";
import {Achievements} from "./Page/Achievements/Achievements";
import TitanPanel from "./Components/TitanPanel/TitanPanel";

function App() {

    return (
        <ParallaxProvider>
            <GlobalStyle/>
            <TitanPanel/>
            <Header/>
            <Bio/>
            <Projects/>
            <Achievements/>
            <Footer/>
        </ParallaxProvider>

    )
}

export default App;
