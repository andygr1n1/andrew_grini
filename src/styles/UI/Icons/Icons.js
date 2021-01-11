import React from "react";
import {MiniImg} from "../MiniImg";
import bootstrapLogo from "../../../images/bootstrap-5-logo.png"
import html5 from "../../../images/html5.png"
import jq from "../../../images/jQ.png"
import es6logo from "../../../images/es6.png"
import jslogo from "../../../images/js-logo.png"
import sassLogo from "../../../images/Sass.png"

export const Html5Logo = () => (
    <MiniImg MiniImgHeader src={html5} alt="html5"/>
)

export const BootstrapLogo = () => (
    <MiniImg MiniImgHeader src={bootstrapLogo} alt="bootstrap"/>
)


export const JqueryLogo = () => (
    <MiniImg MiniImgHeader src={jq} alt="JqueryLogo"/>
)



export const JsEs6Logo = () => (
    <MiniImg MiniImgHeader src={es6logo} alt="es6"/>
)


export const JsLogo = () => (
    <MiniImg MiniImgHeader src={jslogo} alt="Sass"/>
)

export const SassLogo = () => (
    <MiniImg MiniImgHeader src={sassLogo} alt="Sass"/>
)

