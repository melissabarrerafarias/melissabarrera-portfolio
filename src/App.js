// center of application 
import React, { useState } from 'react';
import './index.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [nav] = useState([
    {
      name: "portfolio"
    }
  ])

  const [currentNav, setCurrentNav] = useState(nav[0]);

  return (
    <div>
      <Nav
        nav={nav}
        setCurrentNav={setCurrentNav}
        currentNav={currentNav}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <Hero />
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentNav={currentNav}></Portfolio>
            <About></About>
          </>
        ) : (
            <Contact />
          )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
