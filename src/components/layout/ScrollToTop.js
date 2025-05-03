import React, {useState, useEffect} from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollTopButton, setScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 150) {
                setScrollTopButton(true);
            } else {
                setScrollTopButton(false);
        }
        })
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <div>
        {showScrollTopButton && (
            <FaArrowCircleUp onClick={scrollTop} className='toTop-btn toTop-style' />
        )}
    </div>
  );
};

export default ScrollToTop