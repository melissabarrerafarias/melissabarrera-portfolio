// center of application 
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import './index.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Hero /> 
        <Switch> 
          <Route exact path = "/about" component = {About}/>
          <Route exact path = "/contact" component = {Contact}/>
          <Route exact path = "/resume" component = {Resume} />
          <Route exact path = "/portfolio" component = {Portfolio}/>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
