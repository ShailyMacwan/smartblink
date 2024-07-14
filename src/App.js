import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Product from './components/Product';
<<<<<<< HEAD
import Footer from './components/Footer'
import Support  from './components/Support';
=======
import Footer from './components/Footer';
import BookConsultation from "./components/BookConsultation";
>>>>>>> b188ad5625cc8f0d11c09dbbf24aa00cc80363c9

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
