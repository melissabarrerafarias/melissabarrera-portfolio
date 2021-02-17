// center of application 
import React from 'react'; 
import './index.css'; 
import About from './components/About';
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Hero></Hero>
      <main> 
        <About></About>
      </main>
    </div>
  );
}

export default App;
