import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import OrdinanceList from './components/OrdinanceList';
import IndividualOrdinance from './components/IndividualOrdinance';

function App() {
  return (
     <Router>
      <div className="app-container">
      <Switch>
        <Route path='/ordinance/:id' component={IndividualOrdinance}/>
      	<Route exact path='/' component={OrdinanceList}/>
      </Switch>
      </div>	
    </Router>
  
  );
}

export default App;