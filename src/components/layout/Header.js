import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import logo from "../../assets/logo.jpg";
import "../../styles/Header.css";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Header = ({ navLinks }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 200) {
        setIsNavExpanded(false);
      }
    })
  }, []);

  return (
    <header>
      <nav className="nav-bar">
        <HashLink className="nav-logo" to="/" smooth>
          <img src={logo} alt="Little Lemon logo" />
        </HashLink>
        <button className="nav-hamburger" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          {isNavExpanded ? (
            <FaXmark size={30} />
          ) : (
            <FaBarsStaggered size={30} />
          )}
        </button>
        <motion.ul className={isNavExpanded ? "nav-links expanded" : "nav-links"}
        initial={{y: 0, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}>
          {navLinks.map((navLink) => (
            <motion.li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}>
              {navLink.nvLink ? (
                <HashLink to={navLink.path} smooth>{navLink.name}</HashLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;