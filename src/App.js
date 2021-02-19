// center of application 
import React, { useState } from 'react';
import './index.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'; 

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false); 
  const [aboutSelected, setAboutSelected] = useState(false); 
  const [resumeSelected, setResumeSelected] = useState(false); 

  const [nav] = useState([
    {
      name: "portfolio"
    }, 
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
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <Hero />
      <main>
      {!resumeSelected ? (
          <>
          </>
        ) : (
            <Resume />
          )}
        {!aboutSelected ? (
          <>
          <About></About>
          </>
        ) : (
          <>
          </>
        )}
        {!contactSelected ? (
          <>
          </>
        ) : (
            <Contact />
          )}
          {!portfolioSelected ? (
            <>
            </>
          ) : (
            <Portfolio currentNav={currentNav}></Portfolio>
          )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
