import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import BlogList from "./sections/BlogList";
import BlogShow from "./sections/BlogShow";
import ScrollToHash from "./components/ScrollToHash";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto max-w-7xl">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Experiences />
              {/* <Testimonial /> */}
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogShow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
