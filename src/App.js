// center of application 
import React from 'react'; 
import './index.css'; 
import About from './components/About';
import Hero from './components/Hero'; 
import Nav from './components/Nav'; 
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main> 
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
