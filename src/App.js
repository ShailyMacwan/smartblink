import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Product from './components/Product';
import Footer from './components/Footer'
import Support  from './components/Support';
import BookConsultation from "./components/BookConsultation";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support/>}/>
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/product" element={<Product />} />
        <Route path="/bookConsultation" element={<BookConsultation />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
