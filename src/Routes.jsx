import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import New from './pages/New';
import Session from './pages/Session';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={New}/>
      <Route path="/session/:board/:id" component={Session}/>
    </Route>
  </Router>
);

export default Routes;
