import React from 'react';
import { FaStar } from 'react-icons/fa';

const Stars = ({rating}) => {
    const colors = {
        orange: "#F2C265",
        grey: "#a9a9a9"
    };

    const stars = Array(5).fill(0)

    return (
        <div className='rating-container'>
             <div className='starsContainer'>
                {stars.map((_, index) => {
                    return(
                        <FaStar
                        key={index}
                        size={25}
                        rating={rating}
                        color={(rating) > index ? colors.orange : colors.grey}
                        />
                        )
                    })}
                </div>
             </div>
    );
};

export default Stars;