import React from "react";
import HeroImage1 from "../../assets/restaurantfood.jpg";
import HeroImage2 from "../../assets/restaurant.jpg";
import HeroImage3 from "../../assets/clams.jpg";

const HeroImage = ({hero}) => {
    const images = [HeroImage1, HeroImage2, HeroImage3];

    return (
        <img src= {images[hero]} alt='Restauran' />
    );
};

export default HeroImage;