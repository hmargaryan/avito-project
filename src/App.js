import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BuildingsList from "./components/BuildingsList";
import BuildingDetail from './components/BuildingDetail'

const App = () => {
  return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ BuildingsList } />
            <Route path="/:id" component={ BuildingDetail } />
          </Switch>
        </div>
      </Router>
  )
}

export default App;