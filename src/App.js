import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MonsterPage from './MonsterPage.js';
import MonsterDetail from './MonsterDetail.js';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path="/Monsters/:id">
            <MonsterDetail />
          </Route>
          <Route exact path="/">
            <MonsterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}