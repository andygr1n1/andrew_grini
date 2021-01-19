import React, {useRef, useState} from 'react';
import snowcat from './TitanImages/snowcat.png'
import {titanAnimation} from "./Animation/TitanSnake";
import {Titan} from "./Styled/TitanStyled";

const TitanPanel = () => {
    const refTitan = useRef(null);
    const refContent = useRef(null);
    const refActivator = useRef(null);
    const [toggle, setToggle] = useState(false);

    const VisibilityHandler = () => {
        setToggle(prev => !prev)
        titanAnimation(refTitan.current, refContent.current, toggle);
    }

    return (
        <Titan ref={refTitan}>
            <button ref={refActivator} onClick={VisibilityHandler}>◉</button>
            <div ref={refContent} className="titan-content">
                <div className="creator"> AG 2021 </div>
                <a href="https://github.com/andygr1n1/andrew_grini" target="_blank" rel="noreferrer">
                    <div className="cat-link">
                        this app on github
                        <img src={snowcat} alt="github"/>
                    </div>
                </a>
            </div>
        </Titan>
    )
}

export default TitanPanel;
