import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import CardSection from './components/CardSection.js';
import Footer from './components/Footer.js';

import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;

