import React from 'react'
import "../../styles/TestimonialsCard.css"
import Person1 from "../../assets/person1.webp"
import Person2 from "../../assets/person2.png"
import Person3 from "../../assets/person3.jpg"
import Person4 from "../../assets/person4.jpg"
import Stars from './Stars'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsCard = ({ testimony }) => {
    return (
        <article className='t-card-container'>
                    <img src={ testimony.image } alt={ testimony.name } />
                    <h4>{ testimony.name }</h4>
                    <span><Stars rating={ testimony.rating} /></span>
                    <p><FaQuoteLeft size={15}  color='#F4CE14' /> { testimony.statement } <FaQuoteRight size={15}  color='#F4CE14' /></p>
        </article>
    );
};

export default TestimonialsCard