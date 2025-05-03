import React from 'react';
import "../../styles/TestimonialsCard.css";
import Stars from './Stars';
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