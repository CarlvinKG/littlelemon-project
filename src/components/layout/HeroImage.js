import React from "react";
import HeroImage1 from "../../assets/restaurantfood.jpg";
import HeroImage2 from "../../assets/restaurant.jpg";

const HeroImage = ({image,}) => {
    const images = [HeroImage1, HeroImage2];

    return (
        <img src= {images[image]} alt='Restauran Image' />
    );
};

export default HeroImage;