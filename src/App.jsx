import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
// import Uddeshya from './pages/Uddeshya';
import OurPrograms from './pages/OurPrograms';
import ParentsHub from './pages/ParentsHub';
import Consultation from './pages/Consultation';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/uddeshya" element={<Uddeshya />} /> */}
        <Route path="/our-programs" element={<OurPrograms />} />
        <Route path="/parents-hub" element={<ParentsHub />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
