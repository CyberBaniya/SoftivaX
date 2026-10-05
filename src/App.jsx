import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Process from './components/Process';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home = () => (
  <>
    <Hero />
    <Services />
    <Solutions />
    <Projects />
    <Contact />
  </>
);

const AboutPage = () => (
  <About />
);

const ServicesPage = () => (
  <>
    <Services />
    <Solutions />
    <Contact />
  </>
);

const SolutionsPage = () => (
  <>
    <Solutions />
    <Contact />
  </>
);

const ProjectsPage = () => (
  <Projects />
);

const ContactPage = () => (
  <>
    <Contact />
  </>
);

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:categorySlug" element={<ServiceDetail />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
