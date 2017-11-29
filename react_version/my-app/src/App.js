import React from 'react';
import { BrowserRouter as Router, Route, Switch, StaticRouter, Link } from 'react-router-dom'
import './App.css';
import OrdinanceList from './components/OrdinanceList';
import IndividualOrdinance from './components/IndividualOrdinance';

function App() {
  return (
     <Router>
      <div className="app-container">
      <Switch>
      	<Route exact path='/' component={OrdinanceList}/>
      	<Route path='/individualord' component={IndividualOrdinance}/>
      </Switch>
      </div>	
    </Router>
  
  );
}

export default App;