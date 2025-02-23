import './App.css';
import HomePage from './screens/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import TravelPage from './screens/TravelPage';
import AboutUs from './screens/AboutUs';
import Header from './components/Header';
import Contact from './screens/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<LandingPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
