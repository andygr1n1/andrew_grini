import "./ParallasxEffects.scss"
import {Parallax} from "react-scroll-parallax/cjs";
import { useController } from 'react-scroll-parallax';

import React from "react";

export const CloudEffects = ({link, classname}) => (
    <Parallax className={classname} y={[40, -60]} tagOuter="figure">
        <img src={link} alt=""/>
    </Parallax>
)

export const SunEffects = ({link, classname}) => {
    const { parallaxController } = useController();
    parallaxController.update();

    return (
        <Parallax className={classname}   y={[40, -60]} x={[200, -70]} tagOuter="figure">
            <img src={link}  alt=""/>
        </Parallax>
    )

}

    // <img  src={link} className={classname} alt=""/>



