// center of application 
import React from 'react'; 
import './index.css'; 
import About from './components/About';
import Hero from './components/Hero'; 
import Nav from './components/Nav'; 
import Footer from './components/Footer'; 
import Contact from './components/Contact'; 
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <main> 
        <Contact />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
