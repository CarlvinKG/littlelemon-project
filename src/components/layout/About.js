import React from 'react';
import "../../styles/About.css";
import Image1 from "../../assets/about.png";

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='about-left'>
                <div className='image'>
                    <img src={ Image1 } alt='Chef' />
                </div>
            </div>
            <div className='about-right'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Ut ornare lectus sit amet est. Ligula ullamcorper malesuada proin libero nunc. 
                    Sed cras ornare arcu dui. Fames ac turpis egestas maecenas pharetra convallis 
                    posuere morbi leo.</p>
            </div>
        </div>
    )
};

export default About;