import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Product from './components/Product';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/product" element={<Product />} />
    </Routes>
   
    <Footer />
  </BrowserRouter>
  );
}

export default App;
