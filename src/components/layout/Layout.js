import Header from './Header';
import Footer from './Footer';

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
      path: "/#menu",
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
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;