import React from "react";
import "../../styles/Footer.css";
import Logo from "../../assets/footer-logo.png";
import { BsFacebook, BsInstagram, BsTwitterX, BsPinterest, BsTiktok } from "react-icons/bs";
import { MdOutlineMarkEmailRead, MdPhone } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const socials = [
    {icon: <BsFacebook size={25} />},
    {icon: <BsInstagram size={25} />},
    {icon: <BsTwitterX size={25} />},
    {icon: <BsPinterest size={25} />},
    {icon: <BsTiktok size={25} />}
];

const Footer = ({ navLinks }) => {
    return (
        <footer>
            <div className="container grid">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img className="logo" src= { Logo } alt="Little Lemon Logo" />
                    </div>
                <nav className="footer-nav">
                    <h4>Navigation</h4>
                    <ul>
                        {navLinks.map((navLink, index) => (
                            <li key={index}>
                                <HashLink to={navLink.path} smooth>{navLink.name}</HashLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>423 Lemon Street<br />
                    Chicago, IL 60001<br />
                    <br /><MdPhone size={15} /> (888) 888-7777<br />
                    <MdOutlineMarkEmailRead size={15} /> Little@lemon.com</p>
                </div>
                <div className="footer-socials">
                    <h4>Socials</h4>
                    <ul>
                        {socials.map((social, index) => (
                            <li key={index}>
                                {social.icon}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;