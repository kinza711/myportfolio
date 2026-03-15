import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Carousel /> */}
      <About />
      <Carousel />
      {/* <Projects /> */}
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
