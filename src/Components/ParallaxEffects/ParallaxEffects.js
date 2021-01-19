import "./ParallasxEffects.scss"
import {Parallax} from "react-scroll-parallax/cjs";

import React from "react";

export const ParallaxEffects = ({link, classname}) => (
    <Parallax className={classname} y={[40, -60]} tagOuter="figure">
        <img src={link} alt=""/>
    </Parallax>
)

export const SunEffects = ({link, classname}) => (
        <img  src={link} className={classname} alt=""/>
)
