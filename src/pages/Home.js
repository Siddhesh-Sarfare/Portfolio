import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import BackToTop from "../components/ui/BackToTop";
import useReveal from "../hooks/useReveal";

const Home = () => {
  useReveal();

  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
