import React from 'react';
import "../../styles/HoursOperation.css"

const HoursOperations = () => {
    return (
        <section className='container hours-oper'>
            <h3 className='title-container'>
                Hours of Operation
            </h3>
            <p className='day-time'>Monday - Friday: 8:00 am - 8:00pm<br />
            Saturday - Sunday: 8:00 am - 11:00 pm</p>
        </section>
    );
};

export default HoursOperations;