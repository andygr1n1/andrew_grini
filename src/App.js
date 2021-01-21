import React from "react";
import {GlobalStyle} from "./styles/GlobalStyled";
import Header from "./Page/Header/Header";
import Projects from "./Page/Projects/Projects";
import Footer from "./Page/Footer/Footer";
import Summary from "./Page/Summary/Summary";
import {Achievements} from "./Page/Achievements/Achievements";
import TitanPanel from "./Components/TitanPanel/TitanPanel";
import {ReactQuiz} from "./Page/ReactQuiz/ReactQuiz";

function App() {

    return (
        <>
            <GlobalStyle/>
            <TitanPanel/>
            <Header/>
            <Summary/>
            <ReactQuiz />
            <Projects/>
            <Achievements/>
            <Footer/>
        </>

    )
}

export default App;
