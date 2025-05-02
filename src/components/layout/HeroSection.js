import React from "react";
import "../../styles/HeroSection.css"
import HeroImage from "./HeroImage"
import HeroText from "./HeroText"

export default function HeroSection({image, Text}) {
    return (
        <div className='hs-background'>
            <div className='hs-container'>
                <div className='hs-left'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <HeroText Text={Text} />
                </div>
                <div className='hs-right'>
                    <div className='img-box'>
                        <HeroImage image={image} />
                    </div>
                </div>
            </div>
        </div>
    )
};