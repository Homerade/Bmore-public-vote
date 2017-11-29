import React from 'react';
import { BrowserRouter as Router, Route, StaticRouter, Link, Switch } from 'react-router-dom'
import './App.css';
import OrdinanceList from './components/OrdinanceList';
import IndividualOrdinance from './components/IndividualOrdinance';

function App() {
  return (
    <Router>
      <div className="app-container">
      <Switch>
      	<Route exact path='/' component={OrdinanceList}/>
      	<Route exact path='/singleord' component={IndividualOrdinance}/>
      </Switch>
      </div>	
    </Router>
  
  );
}

export default App;