// center of application 
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SUPERSECRETCODE from './utils/.env'; 

import './index.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import SuperSecret from './components/SuperSecret.js';

function App() {
  const PAGE = process.env.SUPERSECRETCODE;

  return (
    <Router>
      <div>
        <Nav />
        <Switch> 
          <Route exact path = "/melissabarrera-portfolio" component = {About}/>
          <Route exact path = "/melissabarrera-portfolio/contact" component = {Contact}/>
          <Route exact path = "/melissabarrera-portfolio/resume" component = {Resume} />
          <Route exact path = "/melissabarrera-portfolio/portfolio" component = {Portfolio}/>
          <Route exact path = {`/melissabarrera-portfolio/${PAGE}`} component = {SuperSecret}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
