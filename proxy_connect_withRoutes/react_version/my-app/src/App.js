import React from 'react';
import { BrowserRouter as Router, Route, StaticRouter, Link } from 'react-router-dom'
import './App.css';
import OrdinanceList from './components/OrdinanceList';
import Ordinance from './components/Ordinance';

function App() {
  return (
    <Router>
      <div className="app-container">	
      	<Route path='/' component={OrdinanceList}/>
      	<Route path='/singleord' component={Ordinance}/>
      </div>	
    </Router>
  
  );
}

export default App;