import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import logo from "../../assets/logo.jpg";
import "../../styles/Header.css";

export default function Header ({ navLinks }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="nav-bar">
        <NavLink className="nav-logo" to="/">
          <img src={logo} alt="Little Lemon logo" />
        </NavLink>
        <button className="nav-hamburger" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
          {isNavExpanded ? (
            <FaXmark size={30} />
          ) : (
            <FaBarsStaggered size={30} />
          )}
        </button>
        <ul className={isNavExpanded ? "nav-links expanded" : "nav-links"}>
          {navLinks.map((navLink) => (
            <li key={navLink.name} onClick={() => setIsNavExpanded(false)}>
              {navLink.hashLink ? (
                <NavLink to={navLink.path}>{navLink.name}</NavLink>
              ) : (
                <Link to={navLink.path}>{navLink.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
