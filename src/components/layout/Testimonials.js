import React from 'react';
import "../../styles/Testimonials.css";
import Person1 from "../../assets/person1.webp";
import Person2 from "../../assets/person2.png";
import Person3 from "../../assets/person3.jpg";
import Person4 from "../../assets/person4.jpg";
import TestimonialsCard from './TestimonialsCard';

const testimonies = [
  {
    image: Person1,
    name: "Jenny",
    rating: 5,
    statement: "The Bruchetta is to die for!!",
  },
  {
    image: Person2,
    name: "John",
    rating: 4,
    statement: "Excellent service and GREAT food.",
  },
  {
    image: Person3,
    name: "Valerie",
    rating: 4,
    statement: "XOXO, will be going back soon.",
  },
  {
    image: Person4,
    name: "Gretta",
    rating: 5,
    statement: "XOXO, will be going back soon.",
  }
];

const Testimonials = () => {
  return (
    <section className="t-container">
        <div className='container grid claims-container'>
            <h2>Testimonials</h2>
            {testimonies.map((testimony, index) => (
              <TestimonialsCard key={index} testimony={testimony} />
            ))}
        </div>
    </section>
  );
};

export default Testimonials;