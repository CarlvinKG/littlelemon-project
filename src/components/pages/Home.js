import HeroSection from "../layout/HeroSection";
import Highlights from "../layout/Highlights";
import Testimonials from "../layout/Testimonials";
import About from "../layout/About";

const Home = () => {
    return (
      <>
        <HeroSection hero='0' Text='0' />
        <Highlights />
        <Testimonials />
        <About />
      </>
    );
  };

  export default Home;