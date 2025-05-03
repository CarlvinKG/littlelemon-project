import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Home",
      path: "/#home",
      nvLink: true,
    },
    {
      name: "About",
      path: "/#about",
      nvLink: true,
    },
    {
      name: "Menu",
      path: "/menu",
      nvLink: true,
    },
    {
      name: "Reservations",
      path: "/reservations",
      nvLink: false,
    },
    {
      name: "Order Online",
      path: "/order-online",
      nvLink: false,
    },
    {
      name: "Login",
      path: "/login",
      nvLink: false,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
        <main id="home">{children}</main>
        <ScrollToTop />
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;