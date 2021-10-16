import './App.scss';

import { MainWidget } from './widgets/MainWidget';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DetailsForRent } from './widgets/DetailsForRent';
import { Register } from './widgets/Register';
import { Login } from './widgets/Login';
import ProgramExtended  from './widgets/ProgramExtended';
import React from 'react';
import  Navbar  from './widgets/NavBar';
function App() {
  return (
    <div className="App">      
      <Router>
        <Navbar/>
        <Route path="/program/:id" component={ProgramExtended} />
        <Route exact path="/" component={MainWidget} />
        <Route path="/detailsForRent" component={DetailsForRent} />
        <Route path="/register" component={Register} />
        
        <Route path="/login" component={Login} />
      </Router>
     </div>
  );
}

export default App;
