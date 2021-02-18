// center of application 
import React from 'react'; 
import './index.css'; 
import About from './components/About';
import Hero from './components/Hero'; 
import Nav from './components/Nav'; 
import Footer from './components/Footer'; 
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <main> 
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
