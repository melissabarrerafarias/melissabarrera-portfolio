// center of application 
import React from 'react'; 
import './index.css'; 
import About from './components/About';
import Hero from './components/Hero'; 
import Nav from './components/Nav'; 

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main> 
        <About></About>
      </main>
    </div>
  );
}

export default App;
