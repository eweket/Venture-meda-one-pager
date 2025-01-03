import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Eligibility from './components/Eligibility';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Forms from './pages/Forms';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Benefits />
        <Eligibility />
        <FAQ />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-lora">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<Forms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;