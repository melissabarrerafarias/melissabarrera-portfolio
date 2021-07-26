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
  const REACT_APP_SECRET = process.env.REACT_APP_SECRET;
  return ( 
    <Router>
      <div>
        <Nav />
        <Switch> 
          <Route exact path = "/" component = {About}/>
          <Route exact path = "/contact" component = {Contact}/>
          <Route exact path = "/resume" component = {Resume} />
          <Route exact path = "/portfolio" component = {Portfolio}/>
          <Route exact path = {`/${REACT_APP_SECRET}`} component = {SuperSecret}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
