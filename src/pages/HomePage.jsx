import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Carousel from "../components/Carousel";
import TimeLine from "../components/TimeLine";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Carousel />
      <Projects />
      <TimeLine />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
