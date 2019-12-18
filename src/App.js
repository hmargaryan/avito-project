import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BuildingsList from "./components/BuildingsList";

const App = () => {
  return (
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={ BuildingsList } />
          </Switch>
        </Container>
      </Router>
  )
}

export default App;