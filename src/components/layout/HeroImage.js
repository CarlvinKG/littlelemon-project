import React from "react";
import HeroImage1 from "../../assets/restaurantfood.jpg";
import HeroImage2 from "../../assets/restaurant.jpg";

export default function HeroImage({image,}) {
    const images = [HeroImage1, HeroImage2]

    return (
        <img src= {images[image]} alt='Restauran Image' />
    )
}