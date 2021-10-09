import './App.scss';

import { MainWidget } from './widgets/MainWidget';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DetailsForRent } from './widgets/DetailsForRent';
import { DetailsUser } from './widgets/DetailsUser';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainWidget} />
        <Route path="/detailsForRent" component={DetailsForRent} />
        <Route path="/detailsUser" component={DetailsUser} />
      
      </Router>
     </div>
  );
}

export default App;
