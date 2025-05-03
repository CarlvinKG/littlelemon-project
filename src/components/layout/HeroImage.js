import React from "react";
import HeroImage1 from "../../assets/restaurantfood.jpg";
import HeroImage2 from "../../assets/restaurant.jpg";

const HeroImage = ({hero}) => {
    const images = [HeroImage1, HeroImage2];

    return (
        <img src= {images[hero]} alt='Restauran Image' />
    );
};

export default HeroImage;