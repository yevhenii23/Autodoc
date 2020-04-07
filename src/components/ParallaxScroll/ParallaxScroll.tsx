import React from "react";
import './ParallaxScroll.css'

const ImgParallax = require('./parallaxImage.jpg');

const ParallaxScroll = () => {
    return (
        <div className="Parallax-wrapper">
            <img className="Parallax-wrapper-img" src={ImgParallax} alt="img"/>
        </div>
    );
};

export default ParallaxScroll;