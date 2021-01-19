import "./Clouds.scss"
import {Parallax} from "react-scroll-parallax/cjs";

import React from "react";

export const CloudEffect = ({link, classname}) => (
    <Parallax className={classname} y={[40, -60]} tagOuter="figure">
        <img src={link} alt="parallax_effect"/>
    </Parallax>
)
