import React from 'react';
import "../../styles/Highlights.css";
import Dish1 from "../../assets/greek-salad.jpg"
import Dish2 from "../../assets/lemon-dessert.jpg"
import Dish3 from "../../assets/bruschetta.jpg"
import HighlightsCard from './HighlightsCard';

const dishes = [
    {
        image: Dish1,
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    },
    {
        image: Dish2,
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {
        image: Dish3,
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    }
]

const Highlights = () => {
  return (
    <section className="container highlights">
      <div className="highlights-title">
            <h2>This week's specials</h2>
            <div className="btn-container">
                <button className="btn btn-menu">Online Menu</button>
            </div>
      </div>
      {dishes.map((dish, index) => (
        <HighlightsCard key={index} dish={dish} />
      ))}
    </section>
  )
}

export default Highlights