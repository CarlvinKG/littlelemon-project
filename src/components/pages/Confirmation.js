import React from 'react';
import HeroSection from "../layout/HeroSection";
import { BsCheckCircleFill } from "react-icons/bs";
import '../../styles/Confirmation.css'

const Confirmation = () => {
  return (
    <>
        <HeroSection hero='2' Text='2' />
        <section className='container confirmed'>
            <BsCheckCircleFill size={150} color='#F4CE14' />
            <h2>Congratulations!</h2>
            <p>Your table has been reserved.</p>
            <p>A confirmation will be sent to your email shortly.<br />
            Thank you for dining with Little Lemon.</p>
        </section>
    </>
  );
};

export default Confirmation;